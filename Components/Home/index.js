import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';

import { SearchBar, Badge, Avatar } from 'react-native-elements';

import { RFValue } from 'react-native-responsive-fontsize';

import GenreItem from '../UI/genreItem';
import PopularItem from '../UI/popularItem';

import THEME from '../../theme';

import AvatarTest from '../../assets/images/avatar.jpg';

import { genreList } from '../../data.js';

const Home = (props) => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        setLoading(true);

        const request = await fetch(`https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genreList[Math.floor(Math.random() * genreList.length - 1)].id}&page=1`, {
            headers: {
                'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
                'x-rapidapi-key': '0ca4bce728msh0ed2c09d0438568p17a57fjsndf4fa7302df5'
            }
        });
        const fetchedData = await request.json();

        for (var i = fetchedData.results.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            [fetchedData.results[i], fetchedData.results[rand]] = [fetchedData.results[rand], fetchedData.results[i]]
        }

        if (fetchedData) {
            setFilms(fetchedData.results);
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        onRefresh={fetchMovies}
                        refreshing={loading}
                        tintColor='white'
                        colors={['white']}
                    />
                }
            >
                <View style={styles.top}>
                    <Text style={styles.topText} >Hi, Artur!</Text>
                    <Avatar
                        rounded
                        source={AvatarTest}
                        size="medium"
                    />
                    <Badge
                        status="success"
                        containerStyle={{ position: 'absolute', top: RFValue(8), right: RFValue(1) }}
                        badgeStyle={{ width: 15, height: 15, borderRadius: 100 }}
                    />
                </View>

                {/* <View style={styles.searchContainer}>
                    <SearchBar
                        round
                        containerStyle={styles.searchBackground}
                        inputContainerStyle={styles.serachInput}
                        leftIconContainerStyle={{}}
                        inputStyle={{ fontSize: 16 }}
                        placeholder='Search your movie'
                        placeholderTextColor={THEME.lightPurple}
                    />
                </View> */}

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionLabel}>Categories</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.scrollList}
                        contentContainerStyle={{
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}
                    >
                        {
                            genreList.map((i, index) => (
                                <GenreItem
                                    key={index}
                                    id={i.id}
                                    icon={i.icon}
                                    label={i.label}
                                    genreList={genreList}
                                    navigation={props.navigation}
                                />
                            ))
                        }
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionLabel}>Random Movies</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.scrollList}
                        contentContainerStyle={{
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}
                    >
                        {
                            !loading ?
                                films.map((i, index) => (
                                    index <= 10 && i.adult == false ?
                                        !i.title.toLowerCase().includes("porn") && !i.title.toLowerCase().includes("sex") ?
                                            <PopularItem
                                                key={index}
                                                data={{
                                                    image: i.poster_path,
                                                    name: i.title,
                                                    rating: 5 * i.vote_average / 10,
                                                    description: i.overview,
                                                    releaseDate: i.release_date,
                                                    genres: i.genre_ids.map(i => genreList.filter(k => k.id == i))
                                                }}
                                                navigation={props.navigation}
                                            />
                                            : null
                                        :
                                        null
                                ))
                                : <PopularItem />
                        }
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mainPurple,
        paddingTop: RFValue(50),
        paddingHorizontal: RFValue(25)
    },
    top: {
        width: '100%',
        height: '10%',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topText: {
        color: 'white',
        fontSize: RFValue(25),
        fontFamily: 'PT'
    },
    searchContainer: {
        width: '100%',
        height: '11%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(15)
    },
    searchBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    serachInput: {
        height: '100%',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderBottomWidth: 2,
        borderColor: THEME.darkPurple,
        borderRadius: 100,
        paddingLeft: 15
    },
    sectionContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: RFValue(30)
    },
    sectionLabel: {
        color: 'white',
        fontSize: RFValue(18),
        fontFamily: 'PT'
    },
    scrollList: {
        width: '100%',
        marginTop: RFValue(20),
        display: 'flex',
        flexDirection: 'row'
    }
})

export default Home;
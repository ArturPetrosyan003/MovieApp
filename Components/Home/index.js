import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { SearchBar, Badge, Avatar } from 'react-native-elements';

import { RFValue } from 'react-native-responsive-fontsize';
import Constants from 'expo-constants';

import GenreItem from '../UI/genreItem';
import PopularItem from '../UI/popularItem';

import THEME from '../../theme';

import AvatarTest from '../../assets/images/avatar.jpg';
import JokerPoster from '../../assets/images/joker.jpg';

const Home = (props) => {

    const genreList = [
        {
            id: 18,
            icon: '😥',
            label: 'Drama'
        },
        {
            id: 35,
            icon: '😂',
            label: 'Comedy'
        },
        {
            id: 28,
            icon: '🤪',
            label: 'Action'
        },
        {
            id: 53,
            icon: '😐',
            label: 'Thriller'
        },
        {
            id: 10749,
            icon: '🥰',
            label: 'Romance'
        },
        {
            id: 12,
            icon: '🤩',
            label: 'Adventure'
        },
        {
            id: 14,
            icon: '👽',
            label: 'Fantasy'
        },
        {
            id: 878,
            icon: '🙃',
            label: 'Science Fiction'
        },
        {
            id: 10751,
            icon: '🤗',
            label: 'Family'
        },
        {
            id: 27,
            icon: '😱',
            label: 'Horror'
        },
        {
            id: 10752,
            icon: '🤕',
            label: 'War'
        },
        {
            id: 99,
            icon: '🧐',
            label: 'Documentary'
        },
        {
            id: 36,
            icon: '🤓',
            label: 'History'
        },
        {
            id: 16,
            icon: '😊',
            label: 'Animation'
        },
        {
            id: 80,
            icon: '😠',
            label: 'Crime'
        },
        {
            id: 9648,
            icon: '😮',
            label: 'Mystery'
        },
        {
            id: 37,
            icon: '🤠',
            label: 'Western'
        },
        {
            id: 10402,
            icon: '🎵',
            label: 'Music'
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.topText} >Hi, Artur!</Text>
                <Avatar
                    rounded
                    source={AvatarTest}
                    size="medium"
                />
                <Badge
                    status="warning"
                    containerStyle={{ position: 'absolute', top: RFValue(8), right: RFValue(1) }}
                    badgeStyle={{ width: 15, height: 15, borderRadius: 100 }}
                />
            </View>

            <View style={styles.searchContainer}>
                <SearchBar
                    round
                    containerStyle={styles.searchBackground}
                    inputContainerStyle={styles.serachInput}
                    leftIconContainerStyle={{}}
                    inputStyle={{ fontSize: 16 }}
                    placeholder='Search your movie'
                    placeholderTextColor={THEME.lightPurple}
                />
            </View>

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
                                icon={i.icon}
                                label={i.label}
                            />
                        ))
                    }
                </ScrollView>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionLabel}>Popular</Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollList}
                    contentContainerStyle={{
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}
                >
                    <PopularItem
                        image={JokerPoster}
                        name='Joker'
                    />
                    <PopularItem
                        image={JokerPoster}
                        name='Joker'
                    />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mainPurple,
        paddingTop: Constants.statusBarHeight + 20,
        paddingHorizontal: RFValue(30)
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
        marginTop: RFValue(20)
    },
    sectionLabel: {
        color: 'white',
        fontSize: RFValue(18),
        fontFamily: 'PT'
    },
    scrollList: {
        width: '100%',
        marginTop: RFValue(20),
        display: 'flex'
    }
})

export default Home;
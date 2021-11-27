import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import PopularItem from '../UI/popularItem';

import THEME from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

const Explore = (props) => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        // fetchStartups();
    }, []);

    const fetchStartups = async () => {
        const request = await fetch('https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=18&page=1', {
            headers: {
                'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
                'x-rapidapi-key': '0ca4bce728msh0ed2c09d0438568p17a57fjsndf4fa7302df5'
            }
        });
        const fetchedData = await request.json();

        if (fetchedData) {
            setFilms(fetchedData.results);
        }
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.listContainer}> */}
            <FlatList
                data={[1, 2, 3, 4, 5]}
                numColumns={2}
                columnWrapperStyle={{ flexWrap: 'wrap' }}
                showsHorizontalScrollIndicator={false}
                style={styles.listContainer}
                renderItem={({ item }) => (
                    <PopularItem
                    // data={{
                    //     image: item.poster_path,
                    //     name: item.title,
                    //     rating: 5 * item.vote_average / 10,
                    //     description: item.overview,
                    //     releaseDate: item.release_date,
                    //     genres: item.genre_ids.map(i => props.route.params.genreList.filter(k => k.id == i))
                    // }}
                    />
                )}
            />
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mainPurple,
        paddingTop: RFValue(50),
        paddingHorizontal: RFValue(12)
    },
    listContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Explore;
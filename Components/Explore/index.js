import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';

import FilmCard from '../UI/filmCard';

import THEME from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { genreList } from '../../data';

const Explore = (props) => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, [props]);

    const fetchMovies = async () => {
        const request = await fetch(`https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genreList[Math.floor(Math.random() * genreList.length - 1)].id || props.route.params.genreId}&page=1`, {
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.listContainer}
            >
                {
                    films !== [] ?
                        films.map((item, index) => (
                            <FilmCard
                                key={index}
                                data={{
                                    image: item.poster_path,
                                    name: item.title,
                                    rating: 5 * item.vote_average / 10,
                                    description: item.overview,
                                    releaseDate: item.release_date,
                                    genres: item.genre_ids.map(i => genreList.filter(k => k.id == i))
                                }}
                                navigation={props.navigation}
                            />
                        ))
                        : null
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.mainPurple,
        paddingTop: RFValue(50),
        paddingHorizontal: RFValue(11),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listContainer: {
        paddingLeft: RFValue(43)
    }
})

export default Explore;
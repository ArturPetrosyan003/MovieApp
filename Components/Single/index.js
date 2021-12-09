import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Back from '../../assets/icons/Navigation/back.png';
import Save from '../../assets/icons/Navigation/saved.png';
import Star from '../../assets/icons/star.png';

import THEME from '../../theme';

const Single = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => props.navigation.navigate(props.route.params.backScreen)}>
                    <Image style={{ tintColor: 'white', width: 24, height: 24 }} source={Back} />
                </TouchableOpacity>

                <Text style={styles.topText}>Detail movie</Text>

                <TouchableOpacity>
                    <Image style={{ tintColor: 'white', width: 24, height: 24 }} source={Save} />
                </TouchableOpacity>
            </View>


            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.route.params.data.image }} />
            </View>

            <ScrollView
                style={{
                    width: '100%',
                    height: '100%',
                    marginTop: RFValue(20),
                    marginBottom: RFValue(10)
                }}
                contentContainerStyle={{
                    alignItems: 'center'
                }}
            >
                <View style={styles.infoContainer}>
                    <Text style={styles.movieName}>{props.route.params.data.name}</Text>

                    <View style={styles.subTextContainer}>
                        <Text style={styles.subText}>
                            Released: {props.route.params.data.releaseDate.split('-')[0]} | {props.route.params.data.rating}
                        </Text>
                        <Image style={styles.star} source={Star} />
                    </View>

                    <ScrollView
                        horizontal
                        style={styles.genresContainer}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            props.route.params.data.genres ? 
                            props.route.params.data.genres.map((i, index) => (
                                <View key={index} style={styles.genreItem}>
                                    <Text style={styles.genreName}>{i[0].label}</Text>
                                </View>
                            ))
                            : null
                        }
                    </ScrollView>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>{props.route.params.data.description}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mainPurple,
        alignItems: 'center',
        paddingTop: RFValue(50),
        paddingHorizontal: RFValue(25)
    },
    top: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topText: {
        color: THEME.lightPurple,
        fontSize: 18,
        fontFamily: 'PT'
    },
    imageContainer: {
        width: '90%',
        height: '55%',
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: RFValue(35)
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    infoContainer: {
        width: '100%'
    },
    movieName: {
        color: 'white',
        fontSize: RFValue(24),
        fontFamily: 'PT'
    },
    subTextContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    subText: {
        color: THEME.lightPurple,
        fontSize: RFValue(16),
        fontFamily: 'PT'
    },
    star: {
        width: RFValue(12),
        height: RFValue(12),
        marginLeft: 3
    },
    genresContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: RFValue(15)
    },
    genreItem: {
        height: RFValue(35),
        backgroundColor: THEME.darkPurple,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        paddingHorizontal: 15,
    },
    genreName: {
        color: THEME.lightPurple,
        fontSize: RFValue(12),
        fontFamily: 'PT'
    },
    descriptionContainer: {
        marginTop: RFValue(15)
    },
    descriptionText: {
        color: 'white'
    }
});

export default Single;
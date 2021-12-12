import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Rating } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

import THEME from '../../theme';

const FilmCard = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Single', {
                    data: props.data || null,
                    backScreen: "Home"
                })
            }}
        >
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: props.data ? props.data.image : null }} />
                <Text style={styles.name} numberOfLines={1} >{props.data ? props.data.name : null}</Text>
                <Text style={styles.releaseDate} numberOfLines={1} >{props.data ? props.data.releaseDate : null}</Text>
                {
                    props.data ?
                        <Rating
                            readonly
                            imageSize={25}
                            startingValue={props.data ? props.data.rating : null}
                            tintColor={THEME.mainPurple}
                        />
                        : null
                }
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: RFValue(300),
        height: RFValue(450),
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        marginBottom: RFValue(50)
    },
    image: {
        width: '80%',
        height: '75%',
        backgroundColor: THEME.darkPurple,
        borderRadius: 30,
        // resizeMode: 'cover',
    },
    name: {
        color: 'white',
        fontSize: RFValue(20),
        fontFamily: 'PT',
        marginTop: 15,
        marginBottom: 5,
        maxWidth: '90%'
    },
    releaseDate: {
        color: 'white',
        fontSize: RFValue(16),
        fontFamily: 'PT',
        marginBottom: 5,
    }
})

export default FilmCard;
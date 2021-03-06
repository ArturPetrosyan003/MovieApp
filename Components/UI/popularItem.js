import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Rating } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

import THEME from '../../theme';

const PopularItem = (props) => {
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
                {
                    props.data ?
                        <Rating
                            readonly
                            imageSize={20}
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
        width: RFValue(200),
        height: RFValue(300),
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    },
    image: {
        width: '80%',
        height: '70%',
        backgroundColor: THEME.darkPurple,
        borderRadius: 30,
        // resizeMode: 'cover',
    },
    name: {
        color: 'white',
        fontSize: RFValue(18),
        fontFamily: 'PT',
        marginTop: 15,
        marginBottom: 5,
        maxWidth: '90%'
    }
})

export default PopularItem;
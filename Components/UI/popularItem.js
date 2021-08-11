import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Rating } from 'react-native-elements';

import THEME from '../../theme';

const PopularItem = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.image} />
            <Text style={styles.name}>{props.name}</Text>
            <Rating
                readonly
                imageSize={18}
                startingValue={4.5}
                tintColor={THEME.mainPurple}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 260,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 30,
        overflow: 'hidden'
    },
    image: {
        width: '80%',
        height: '70%',
        borderRadius: 30,
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'PT',
        marginTop: 15,
        marginBottom: 5
    }
})

export default PopularItem;
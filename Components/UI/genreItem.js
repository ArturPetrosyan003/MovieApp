import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import THEME from '../../theme';

const GenreItem = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Explore', {
                    genreId: props.id,
                    genreList: props.genreList
                })
            }}
        >
            <View style={styles.container}>
                <Text style={styles.icon}>{props.icon}</Text>
                <Text numberOfLines={1} style={styles.label}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 100,
        backgroundColor: THEME.darkPurple,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        paddingHorizontal: 10,
        marginRight: 10
    },
    icon: {
        fontSize: 25
    },
    label: {
        color: '#b1b5c1',
        fontSize: RFValue(12),
        fontFamily: 'PT',
        textAlign: 'center',
        marginTop: RFValue(5)
    }
})

export default GenreItem;
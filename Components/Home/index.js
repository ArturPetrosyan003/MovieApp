import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

import THEME from '../../theme';

const Home = (props) => {
    return (
        <View style={style.container}>
            <View style={style.top}>
                <Text>Hi, Name</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: THEME.mainPurple,
        paddingTop: Constants.statusBarHeight
    },
    top: {
        width: '100%',
        height: '30%',
        color: 'white'
    }
})

export default Home;
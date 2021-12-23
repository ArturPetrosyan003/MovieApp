import React, { useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './index';
import Single from '../Single/index';

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    }
});

const HomeNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode='none'
            screenOptions={{
                cardStyleInterpolator: forFade
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
                initialParams={{
                    userId: props.route.params.userId
                }}
            />
            <Stack.Screen
                name='Single'
                component={Single}
            />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
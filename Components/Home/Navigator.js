import React, { useEffect } from 'react';

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

    // useEffect(() => {
    //     if (props.route.params.navigationRef.current != null) {
    //         if (props.route.params.navigationRef.current.getCurrentRoute().name == 'Single') {
    //             props.route.params.setShowTabs(false);
    //         }
    //         else {
    //             props.route.params.setShowTabs(true);
    //         }
    //     }
    // }, [props]);

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
            />
            <Stack.Screen
                name='Single'
                component={Single}
            />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
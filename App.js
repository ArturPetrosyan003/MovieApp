import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Components/Home/index';
import Explore from './Components/Explore';
import Saved from './Components/Saved';
import Profile from './Components/Profile';

import THEME from './theme';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#2f3fbb"
        barStyle={{
          backgroundColor: THEME.mainPurple,
        }}
        sceneAnimationEnabled={false}
        // labeled={false}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '•',
            tabBarIcon: ({ color }) => (
              <Foundation name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={Explore}
          options={{
            tabBarLabel: '•',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="explore" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
            tabBarLabel: '•',
            tabBarIcon: ({ color }) => (
              <Foundation name="flag" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '•',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


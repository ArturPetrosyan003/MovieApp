import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

import HomeNavigator from './Components/Home/Navigator';
import Explore from './Components/Explore';
import Saved from './Components/Saved';
import Profile from './Components/Profile';
import Auth from './Components/Auth';

import HomeIcon from './assets/icons/Navigation/home.png';
import ExploreIcon from './assets/icons/Navigation/explore.png';
import SavedIcon from './assets/icons/Navigation/saved.png';
import ProfileIcon from './assets/icons/Navigation/profile.png';

import THEME from './theme';
import { StatusBar } from 'expo-status-bar';

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const [loading, setLoading] = useState(true);
  const [showTabs, setShowTabs] = useState(true);
  const [authenticated, setAuthentication] = useState(false);

  // const navigationRef = useRef(null);

  const loadApp = async () => {
    await Font.loadAsync({
      'PT': require('./assets/fonts/PTSans-Regular.ttf'),
      'Lobster': require('./assets/fonts/Lobster-Regular.ttf')
    });
  }

  return (
    <>
      <StatusBar style='light' hidden />
      {
        loading ?
          <AppLoading
            startAsync={loadApp}
            onFinish={() => setLoading(false)}
            onError={(error) => console.error(error)}
          />
          : !authenticated ?
            <Auth login={setAuthentication} />
            :
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Home"
                activeColor="#2f3fbb"
                inactiveColor='#32385A'
                barStyle={{
                  height: RFValue(75),
                  paddingTop: RFValue(10),
                  backgroundColor: THEME.mainPurple,
                  display: showTabs ? 'flex' : 'none'
                }}
              >
                <Tab.Screen
                  name="Home"
                  component={HomeNavigator}
                  options={{
                    tabBarLabel: '•',
                    tabBarIcon: ({ color }) => (
                      <Image source={HomeIcon} style={{ tintColor: color, width: 24, height: 24 }} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Explore"
                  component={Explore}
                  options={{
                    tabBarLabel: '•',
                    tabBarIcon: ({ color }) => (
                      <Image source={ExploreIcon} style={{ tintColor: color, width: 24, height: 24 }} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Saved"
                  component={Saved}
                  options={{
                    tabBarLabel: '•',
                    tabBarIcon: ({ color }) => (
                      <Image source={SavedIcon} style={{ tintColor: color, width: 24, height: 24 }} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                    tabBarLabel: '•',
                    tabBarIcon: ({ color }) => (
                      <Image source={ProfileIcon} style={{ tintColor: color, width: 24, height: 24 }} />
                    ),
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
      }
    </>
  );
}


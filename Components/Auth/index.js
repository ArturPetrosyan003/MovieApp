import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import BackgroundImage from '../../assets/images/authBackground.jpg';

import { RFValue } from 'react-native-responsive-fontsize';

import Registration from './registration';
import LandingPage from './landingPage';

import THEME from '../../theme';

const Auth = (props) => {
    const [viewId, setViewId] = useState(0);

    return (
        <ImageBackground style={styles.backgroundImage} source={BackgroundImage} resizeMode='cover' >
            <View style={styles.container}>
                {
                    viewId === 0 ?
                        <LandingPage
                            login={props.login}
                            setViewId={setViewId}
                            setUserId={props.setUserId}
                        />
                        : <Registration
                            login={props.login}
                            setViewId={setViewId}
                            setUserId={props.setUserId}
                        />
                }
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(7, 13, 45, 0.92)',
        paddingTop: RFValue(50)
    }
});

export default Auth;
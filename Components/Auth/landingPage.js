import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import THEME from '../../theme';

const LandingPage = (props) => {
    return (
        <>
            <View style={styles.top}>
                <Text style={styles.title}>MovHome</Text>
                <Text style={styles.subTitle}>Some text is important here to fill the empty space</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => props.login(true)}>
                    <Text style={styles.buttonText}>Go to my cinema</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.bottom} onPress={() => props.setViewId(1)}>
                <Text style={styles.bottomText}>Don't have an account? Let's create one</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    top: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(100),
    },
    title: {
        color: 'white',
        fontSize: RFValue(55),
        fontFamily: 'Lobster',
        marginBottom: RFValue(20),
        textAlign: 'center'
    },
    subTitle: {
        color: 'white',
        fontSize: RFValue(18),
        fontFamily: 'Lobster',
        maxWidth: RFValue(200),
        textAlign: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(100)
    },
    button: {
        width: RFValue(200),
        height: RFValue(60),
        backgroundColor: THEME.buttonPurple,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 10
    },
    buttonText: {
        color: 'white',
        fontSize: RFValue(20),
        fontFamily: 'Lobster'
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(250)
    },
    bottomText: {
        color: 'white',
        fontSize: RFValue(16),
        fontFamily: 'Lobster',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline'
    }
});

export default LandingPage;
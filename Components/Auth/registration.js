import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Back from '../../assets/icons/back.png';

import THEME from '../../theme';

const Registration = (props) => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const register = async () => {
        const request = await fetch('https://movhome-e3812-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            })
        });

        const response = await request.json();

        if (response.name) {
            props.setUserId(response.name);
            props.login(true);
        }
    }

    return (
        <>
            <TouchableOpacity style={styles.backButton} onPress={() => props.setViewId(0)}>
                <Image style={styles.backButtonIcon} source={Back} />
            </TouchableOpacity>

            <View style={styles.container}>

                <Text style={styles.headerText}>Start your journey</Text>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        placeholderTextColor={THEME.darkPurple}
                        value={formData.username}
                        onChangeText={(e) => setFormData({ ...formData, username: e })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor={THEME.darkPurple}
                        value={formData.password}
                        onChangeText={(e) => setFormData({ ...formData, password: e })}
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={register}>
                        <Text style={styles.loginButtonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    backButton: {
        width: RFValue(40),
        height: RFValue(40),
        backgroundColor: THEME.lightPurple,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderRadius: 30,
        marginLeft: RFValue(25)
    },
    backButtonIcon: {
        width: '50%',
        height: '50%'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: RFValue(25),
        paddingVertical: RFValue(100)
    },
    headerText: {
        color: 'white',
        fontSize: RFValue(40),
        fontFamily: 'Lobster',
        textAlign: 'center',
        marginBottom: RFValue(80)
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: RFValue(270),
        height: RFValue(50),
        color: THEME.darkPurple,
        backgroundColor: THEME.lightPurple,
        fontSize: RFValue(18),
        borderRadius: 30,
        marginBottom: RFValue(25),
        paddingHorizontal: RFValue(20)
    },
    loginButton: {
        width: RFValue(120),
        height: RFValue(40),
        backgroundColor: THEME.buttonGreen,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    loginButtonText: {
        color: 'white',
        fontSize: RFValue(18),
        fontFamily: 'Lobster',
        letterSpacing: 1
    }
});

export default Registration;
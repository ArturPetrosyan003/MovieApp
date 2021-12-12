import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Avatar from '../../assets/images/avatar.jpg'

import THEME from '../../theme';

const Profile = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Log out</Text>
            </TouchableOpacity>

            <View style={styles.top}>
                <Image style={styles.avatar} source={Avatar} />
                <Text numberOfLines={2} style={styles.username}>Artur Petrosyan</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mainPurple,
        paddingTop: RFValue(50),
        paddingHorizontal: RFValue(25)
    },
    logoutButton: {
        width: RFValue(75),
        height: RFValue(30),
        backgroundColor: '#DC6666',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        alignSelf: 'flex-end'
    },
    logoutButtonText: {
        color: 'white',
        fontFamily: 'PT'
    },
    top: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(50)
    },
    avatar: {
        width: RFValue(150),
        height: RFValue(150),
        borderRadius: 100
    },
    username: {
        color: 'white',
        fontSize: RFValue(25),
        fontFamily: 'PT',
        marginTop: 10,
        maxWidth: 200,
        textAlign: 'center'
    }
})

export default Profile;
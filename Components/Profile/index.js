import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Avatar from '../../assets/images/avatar.jpg';
import Joker from '../../assets/images/joker.jpg'
import RightArrow from '../../assets/icons/right-arrow.png';

import THEME from '../../theme';

const Profile = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoutButton} onPress={() => props.route.params.setAuthentication(false)}>
                <Text style={styles.logoutButtonText}>Log out</Text>
            </TouchableOpacity>

            <View style={styles.top}>
                <Image style={styles.avatar} source={Avatar} />
                <Text numberOfLines={2} style={styles.username}>Artur Petrosyan</Text>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <TouchableOpacity style={styles.infoItem}>
                    <ImageBackground style={styles.infoItemBackground} source={Joker}>
                        <View style={styles.infoItemBackgroundOpacity}>
                            <View style={styles.infoItemTextWrapper}>
                                <Text style={styles.infoItemText}>Saved 20</Text>
                                <Image style={styles.arrowIcon} source={RightArrow} />
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.infoItem}>
                    <ImageBackground style={styles.infoItemBackground} source={Joker}>
                        <View style={styles.infoItemBackgroundOpacity}>
                            <View style={styles.infoItemTextWrapper}>
                                <Text style={styles.infoItemText}>Viewed 30</Text>
                                <Image style={styles.arrowIcon} source={RightArrow} />
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.mainPurple,
        paddingTop: RFValue(50),
        paddingHorizontal: RFValue(25),
        alignItems: 'center'
    },
    logoutButton: {
        width: RFValue(75),
        height: RFValue(30),
        backgroundColor: THEME.buttonRed,
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
        marginTop: RFValue(40)
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
    },
    editButton: {
        width: RFValue(75),
        height: RFValue(30),
        backgroundColor: THEME.buttonGreen,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFValue(10),
        borderRadius: 30,
    },
    editButtonText: {
        color: 'white',
        fontSize: RFValue(15),
        fontFamily: 'PT',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: RFValue(50),
        paddingLeft: RFValue(15)
    },
    infoItem: {
        width: RFValue(150),
        height: RFValue(200),
        backgroundColor: THEME.darkPurple,
        borderRadius: 30,
        marginRight: RFValue(15),
        overflow: 'hidden'
    },
    infoItemBackground: {
        flex: 1
    },
    infoItemBackgroundOpacity: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end'
    },
    infoItemTextWrapper: {
        width: '100%',
        height: '25%',
        backgroundColor: 'rgba(0 ,0, 0, 0.8)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    infoItemText: {
        color: 'white',
        fontSize: RFValue(16),
        fontFamily: 'PT'
    },
    arrowIcon: {
        width: RFValue(16),
        height: RFValue(16)
    }
})

export default Profile;
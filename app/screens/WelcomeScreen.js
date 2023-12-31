import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login"/>
                <AppButton title="Register" color='secondary'/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,

    },
    buttonContainer: {
        padding: 20,
        paddingBottom: 40,
        width: "100%"
    },

    logo: {
        width: 100,
        height: 100,
    },
    
    logoContainer: {
        position: 'absolute',
        top: 200,
        alignItems: 'center',
    },
})

export default WelcomeScreen;
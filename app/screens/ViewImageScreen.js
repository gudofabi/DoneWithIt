import React from 'react';
import { Image, StyleSheet, View, ViewBase } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.icon, styles.closeIcon]}></View>
            <View style={[styles.icon, styles.deleteIcon]}></View>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: colors.primary,
        left: 30
    }, 
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        right: 30
    },
    icon: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
    },
    image: {
        width: '100%',
        height: '100%',
        
    }
})

export default ViewImageScreen;
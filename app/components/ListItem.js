import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightAction}) {
    return (
        <Swipeable renderRightActions={renderRightAction}>
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}
                >
                <View style={styles.container}>
                    { IconComponent }
                    { image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        { subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 10,
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16,
        color: colors.medium
    }
})

export default ListItem;
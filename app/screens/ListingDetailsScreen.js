import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image 
                style={styles.image} 
                source={require("../assets/jacket.jpg")}
            ></Image>
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>Jacket for Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Gudo Fabi"
                        subTitle="5 Listings"
                        />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailContainer: {
        padding: 20,
    },
    title: {
        fontWeight: "500",
        fontSize: 24
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 14
    }
})

export default ListingDetailsScreen;
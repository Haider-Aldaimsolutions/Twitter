import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'

const SingleFeed = (props) => {
    const username = props.username;
    const Description = props.Description;
    const profile_img = props.profile_img;
    const post_img = props.post_img;


    return (
        <View style={styles.container}>
            <Image style={styles.profileImage} source={{ uri: profile_img }} />
            <View style={styles.TextContainer}>
                <Text style={{ fontSize: 20, fontWeight: '700', }}>{username}</Text>
                <Text style={{ fontWeight: '400', }}>{Description}</Text>
                <Image style={styles.PostImage} source={{ uri: post_img }} />

            </View>
        </View>
    );
}
export default SingleFeed


const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        marginVertical: "5%",
        marginHorizontal: '5%',

    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    TextContainer: {
        marginHorizontal: '5%',
        paddingRight: 30
    },
    PostImage: {
        resizeMode: 'contain',
        width: "100%",
        height: 200,
        borderRadius: 5,

    },

})

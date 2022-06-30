import { Alert, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'

const Messages = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Send a messages,get a message </Text>
            <Pressable style={styles.Pressable} ><Text style={styles.PressableText} >Writer a message</Text></Pressable>
        </View>
    );
}
export default Messages


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    header: {
        textAlign: 'center',
        marginTop: '50%',
        fontWeight: '500',
        fontSize: 30,
    },
    Pressable: {
        borderColor: '#42bcf5',
        backgroundColor: '#42bcf5',
        borderWidth: 1,
        marginTop: 40,
        borderRadius: 6,
        paddingVertical: 18,
        paddingHorizontal: 30,
    },
    PressableText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20,
    }

})

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Feed from '../screens/feed';
import Messages from '../screens/messages';
import Notifications from '../screens/notifications';
import Drawer_Navigation from './drawer_navigation';
import Profile from '../screens/profile';
import Details from '../screens/details';
const Stack = createNativeStackNavigator();



const Stack_Navigation = () => {

    return (

        <NavigationContainer
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Navigator
                initialRouteName="FeedList"
                headerMode="screen"
            >

                <Stack.Screen name="drawer"
                    component={Drawer_Navigation}
                    options={{ headerTitle: 'Twitter' }}
                />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Details" component={Details} options={{ headerTitle: 'Tweet' }} />

            </Stack.Navigator>

        </NavigationContainer>

    )
}

export default Stack_Navigation

const styles = StyleSheet.create({})

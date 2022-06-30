import { StyleSheet, Text, Button, Image, View, Pressable } from 'react-native';
import React from 'react';
import { NavigationContainer, StackActions, DrawerActions, TabActions } from '@react-navigation/native';
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
                    options={({ navigation }) => ({

                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },

                        headerLeft: () => (

                            <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                                <Image
                                    style={{ width: 35, height: 35, borderRadius: 30 }}
                                    source={{
                                        uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                                    }}
                                />
                            </Pressable>

                        ),
                        headerRight: () => (
                            <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: "52%", }} source={require("../../assets/twitter-logo4.png")} />

                        ),

                    })}
                />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Details" component={Details}
                    options={{ headerTitle: 'Tweet' }}
                />

            </Stack.Navigator>

        </NavigationContainer>

    )
}

export default Stack_Navigation

const styles = StyleSheet.create({})

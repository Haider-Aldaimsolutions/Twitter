import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import Feed from '../screens/feed';
import Messages from '../screens/messages';
import Notifications from '../screens/notifications';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
const Tab_Navigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            shifting={true}
            sceneAnimationEnabled={false}>

            <Tab.Screen name="Feed" component={Feed} options={{ tabBarIcon: 'home-account', tabBarLabel: 'Feed', tabBarColor: 'black', }} />
            <Tab.Screen name="Notifications" component={Notifications} options={{ tabBarIcon: 'bell-outline', tabBarLabel: 'Notifications', tabBarColor: 'black', }} />
            <Tab.Screen name="Messages" component={Messages} options={{ headerShown: false, tabBarIcon: 'message-text-outline', tabBarLabel: 'Messages', tabBarColor: 'black', }} />

        </Tab.Navigator>
    );
}

export default Tab_Navigation

const styles = StyleSheet.create({})
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Profile from '../screens/profile';
import Tab_Navigation from './tab_navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContent } from '../screens/drawercontent';
const Draw = createDrawerNavigator();

const Drawer_Navigation = ({ navigation }) => {

    return (
        <Draw.Navigator drawerContent={() => <DrawerContent />}>
            <Draw.Screen name="tab" component={Tab_Navigation} options={{
                headerShown: false, headerTransparent: false
            }} />


        </Draw.Navigator>
    )
}

export default Drawer_Navigation

const styles = StyleSheet.create({})

import { StyleSheet, Text, Button, Image, View, Pressable } from 'react-native';
import React from 'react';
import Feed from '../screens/feed';
import Messages from '../screens/messages';
import Notifications from '../screens/notifications';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Tab_Navigation() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Feed" component={Feed}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/birdhouse.png')}
                                resizeMode='contain'
                                style={{ width: 30, height: 30 }}
                            />
                            <Text>Feed</Text>
                        </View>

                    ), tabBarShowLabel: false, headerShown: false
                }} />
            <Tab.Screen name="Notifications" component={Notifications}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Image source={require('../../assets/notifications.png')}
                                resizeMode='contain'
                                style={{ width: 30, height: 30, alignSelf: 'center' }}
                            />
                            <Text>Notifications</Text>
                        </View>

                    ), tabBarShowLabel: false, headerShown: false
                }} />

            <Tab.Screen name="Messages" component={Messages}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Image source={require('../../assets/messages.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30, height: 30, alignSelf: 'center',

                                }}
                            />
                            <Text>Messages</Text>
                        </View>

                    ), tabBarShowLabel: false, headerShown: false
                }} />
        </Tab.Navigator>
    );
}

export default Tab_Navigation


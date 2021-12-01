import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home' //Memanggil halaman Home
import Profile from './pages/Profile'; //Memanggil halaman PostPage

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign'

const Stack = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IconAntDesign name="home" color={color} size={size} />
                    ),
            }}
            />
                <Stack.Screen name="Profile" component={Profile} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <IconAntDesign name="user" color={color} size={size} />
                    ),
            }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
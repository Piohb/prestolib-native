import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from "../screen/Login";

const { Navigator, Screen } = createStackNavigator();

const LoginNavigator = () => (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Login' component={Login}/>
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <LoginNavigator />
    </NavigationContainer>
);
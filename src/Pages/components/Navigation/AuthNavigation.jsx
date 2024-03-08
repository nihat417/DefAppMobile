import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../../Auth/SignIn';
import SignUp from '../../Auth/SignUp';


const AuthStack = createNativeStackNavigator();

const AuthNavigation = () =>{
    return(
        <NavigationContainer>
            <AuthStack.Navigator initialRouteName="SignIn" screenOptions={{headerShown:false}}> 
                <AuthStack.Screen name='SignIn' component={SignIn}/>
                <AuthStack.Screen name='SignUp' component={SignUp}/>
            </AuthStack.Navigator>
        </NavigationContainer>
    );
  }

export default AuthNavigation;
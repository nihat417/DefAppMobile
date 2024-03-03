import React from 'react';

import HomePage from '../../common/HomePage';
import Barcode from '../../common/Barcode';
import Profile from '../../common/Profile';


import TodaysMenu from '../../common/TodaysMenu';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavTabMenu from '../../components/Navigation/NavTabMenu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../../common/Details';
import ProfileEdit from '../../common/ProfileEdit';
import Payment from '../../common/Payment';


const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MenuStack = createNativeStackNavigator();

//stacks

const MyHomeStack = () =>{
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
          <HomeStack.Screen name='Home' component={HomePage}/>
          <HomeStack.Screen name='TodaysMenu' component={TodaysMenu}/>
          <HomeStack.Screen name='Details' component={Details}/>
        </HomeStack.Navigator>
    );
}

const MyMenuStack = () =>{
    return (
        <MenuStack.Navigator screenOptions={{headerShown:false}}>
            <MenuStack.Screen name='MainMenu' component={Profile}/>
            <MenuStack.Screen name='ProfileEdit' component={ProfileEdit}/>
            <MenuStack.Screen name='Payments' component={Payment}/>
        </MenuStack.Navigator>
    )
}


//my tab
const NavigationMain = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} tabBar={(props) => <NavTabMenu {...props} />}>
        <Tabs.Screen name="Home" component={MyHomeStack} />
        <Tabs.Screen name="Subscription" component={HomePage} />
        <Tabs.Screen name="Scan" component={Barcode} />
        <Tabs.Screen name="Menu" component={MyMenuStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default NavigationMain;
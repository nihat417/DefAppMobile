import React from 'react';

import HomePage from '../../common/HomePage';
import Barcode from '../../common/Barcode';
import Profile from '../../common/Profile';
import TodaysMenu from '../../common/TodaysMenu';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NavTabMenu from '../../components/Navigation/NavTabMenu';
import Details from '../../common/Details';
import ProfileEdit from '../../common/ProfileEdit';
import Payment from '../../common/Payment';
import AddLocations from '../../common/AddLocations';
import SettingsPage from '../../common/SettingsPage';
import HomeHeader from '../HomePage/HomeHeader';
import Header from '../ProfileEdit/Header';

const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MenuStack = createNativeStackNavigator();

//stacks


const MyHomeStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{header:()=><HomeHeader/>}} name="Home" component={HomePage} />
      <HomeStack.Screen name="TodaysMenu" component={TodaysMenu} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

const MyMenuStack = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="Menu"
        component={Profile}
      />
      <MenuStack.Screen
        options={{header: () => <Header title="Edit Profile" />}}
        name="ProfileEdit"
        component={ProfileEdit}
      />
      <MenuStack.Screen options={{header:()=><Header title="Payment"/>}} name="PaymentsPage" component={Payment} />
      <MenuStack.Screen
        options={{header: () => <Header title="Add Locations" />}}
        name="AddLocationsPage"
        component={AddLocations}
      />
      <MenuStack.Screen
       options={{header:()=> <Header title="Settings"/>}}
       name="SettingsPage" component={SettingsPage} />
    </MenuStack.Navigator>
  );
};

//my tab
const NavigationMain = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        tabBar={props => <NavTabMenu {...props} />}>
        <Tabs.Screen name="Home" component={MyHomeStack} />
        <Tabs.Screen name="Subscription" component={HomePage} />
        <Tabs.Screen name="Scan" component={Barcode} />
        <Tabs.Screen name="Menu" component={MyMenuStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default NavigationMain;

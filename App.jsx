import React from 'react';
import {SafeAreaView} from 'react-native';
import HomePage from './src/Pages/common/HomePage';
import TodaysMenu from './src/Pages/common/TodaysMenu';
import Details from './src/Pages/common/Details';
import FoodDetails from './src/Pages/common/FoodDetails';
import CheckOut from './src/Pages/common/CheckOut';
import BarcodeScan from './src/Pages/common/BarcodeScan';
import Barcode from './src/Pages/common/Barcode';
import Profile from './src/Pages/common/Profile';
import ProfileEdit from './src/Pages/common/ProfileEdit';
import SettingsPage from './src/Pages/common/SettingsPage';
import ResetPassword from './src/Pages/common/ResetPassword';
import AddNotifications from './src/Pages/common/AddNotifications';
import Payment from './src/Pages/common/Payment';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();
// const tab = createBottomTabNavigator();
const App = () => {
  return (
    // <NavigationContainer>
      
    // </NavigationContainer>

    // <SafeAreaView>
    // </SafeAreaView>
    // <TodaysMenu />
    // <Details/>
    // <FoodDetails/>
    // <CheckOut/>
    // <BarcodeScan/>
    // <Barcode/>
    <Profile/>
    // <ProfileEdit/>
    // <ResetPassword/>
    // <AddNotifications/>
    // <Payment/>
    // <SettingsPage />
    // <HomePage />
  );
};

export default App;

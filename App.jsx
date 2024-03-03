import React from 'react';
import {SafeAreaView} from 'react-native';
import TodaysMenu from './src/Pages/common/TodaysMenu';
import Details from './src/Pages/common/Details';
import FoodDetails from './src/Pages/common/FoodDetails';
import CheckOut from './src/Pages/common/CheckOut';
import BarcodeScan from './src/Pages/common/BarcodeScan';

import ProfileEdit from './src/Pages/common/ProfileEdit';
import SettingsPage from './src/Pages/common/SettingsPage';
import ResetPassword from './src/Pages/common/ResetPassword';
import AddNotifications from './src/Pages/common/AddNotifications';
import Payment from './src/Pages/common/Payment';


import NavigationMain from './src/Pages/components/Navigation/NavigationMain';

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
    // <Profile/>
    // <ProfileEdit/>
    // <ResetPassword/>
    // <AddNotifications/>
    // <Payment/>
    // <SettingsPage />
    // <HomePage />
    <NavigationMain/>
  );
};

export default App;

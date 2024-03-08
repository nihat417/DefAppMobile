import React, {useState} from 'react';

import NavigationMain from './src/Pages/components/Navigation/NavigationMain';
import SignUp from './src/Pages/Auth/SignUp';
import SignIn from './src/Pages/Auth/SignIn';
import ForgotEmail from './src/Pages/Auth/ForgotEmail';
import ForgotCheck from './src/Pages/Auth/ForgotCheck';
import AuthNavigation from './src/Pages/components/Navigation/AuthNavigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{flex: 1}}
        className={`${Platform.OS === 'ios' ? 'pb-[20px]' : ''}`}
        edges={['right', 'top', 'left']}>
        {!authenticated ? <AuthNavigation /> : <NavigationMain />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

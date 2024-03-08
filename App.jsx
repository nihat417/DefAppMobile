import React, { useState } from 'react';

import NavigationMain from './src/Pages/components/Navigation/NavigationMain';
import SignUp from './src/Pages/Auth/SignUp';
import SignIn from './src/Pages/Auth/SignIn';
import ForgotEmail from './src/Pages/Auth/ForgotEmail';
import ForgotCheck from './src/Pages/Auth/ForgotCheck';
import AuthNavigation from './src/Pages/components/Navigation/AuthNavigation';

const App = () => {
  const [authenticated,setAuthenticated] = useState(false);

  return (
      !authenticated ? <AuthNavigation/> :<NavigationMain/>
  );
};

export default App;

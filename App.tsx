import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/routes/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/routes/RootNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from './src/Screens/ScreenFallback/CustomFallback';

const App = () => {

  useEffect(() => {
    GoogleSignin.configure({

      webClientId: '865538341554-tril97h7rqdc2tht1qpvah1gv3e4etvh.apps.googleusercontent.com', 
      offlineAccess: false, 
    });
  }, []);
  
  return (
    <Provider store={store}>
       <ErrorBoundary FallbackComponent={CustomFallback}>
      <NavigationContainer>
       <RootNavigator/>
      </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;

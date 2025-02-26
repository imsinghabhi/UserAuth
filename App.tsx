import React from 'react';
import { Provider } from 'react-redux';
import store from './src/utils/redux/store';
import AppNavigator from './src/routes/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

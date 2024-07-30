import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenRegister from '../Screens/ScreenRegister/ScreenRegister';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
   
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Register" component={ScreenRegister} />
          <Stack.Screen 
          name="Home" 
          component={ScreenHome}
          options={{ headerLeft: () => null }}  
        />
      </Stack.Navigator>
    
  );
};

export default AppNavigator;

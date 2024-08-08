import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';
import { RootStackParamList } from '../utils/interfaces/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={ScreenHome}
        options={{
          headerShown: false, 
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

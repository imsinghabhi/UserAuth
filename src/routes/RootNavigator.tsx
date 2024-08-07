import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { RootState } from '../utils/redux/store';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenRegister from '../Screens/ScreenRegister/ScreenRegister';
import { RootStackParamList } from '../utils/interfaces/RootStackParamList';
import AppNavigator from './AppNavigator';
import { login } from '../Screens/ScreenLogin/redux/authSlice';
import { storage } from '../utils/Storage/mmkv'; // Ensure MMKV is configured correctly

const Stack = createStackNavigator<RootStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={ScreenLogin} />
    <Stack.Screen name="Register" component={ScreenRegister} />
  </Stack.Navigator>
);

const RootNavigator: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = storage.getString('authToken');
    if (token) {
      dispatch(login('User')); 
    }
  }, [dispatch]);

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;

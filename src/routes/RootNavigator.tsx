import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { RootState } from '../utils/redux/store';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenRegister from '../Screens/ScreenRegister/ScreenRegister';
import SplashScreen from '../Screens/ScreenSplash/SplashScreen';
import AppNavigator from './AppNavigator';
import { login } from '../Screens/ScreenLogin/redux/authSlice';
import { storage } from '../utils/Storage/mmkv';
import { RootStackParamList } from '../utils/interfaces/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={ScreenLogin}  options={{
          headerShown: false, 
        }} />
    <Stack.Screen name="Register" component={ScreenRegister}  options={{
          headerShown: false, 
        }}  />
  </Stack.Navigator>
);

const RootNavigator: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = storage.getString('authToken');
      if (token) {
        dispatch(login('User'));
      }
      setIsLoading(false);
    };

    const timeoutId = setTimeout(checkAuth, 3000);

    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

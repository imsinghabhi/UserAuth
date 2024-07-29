// src/Screens/ScreenHome/ScreenHome.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import {  Props } from './utils/type/interfaces';
import styles from './styleHome';
import { logout } from '../ScreenLogin/redux/authSlice';



const ScreenHome: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ScreenHome;

import React, { useCallback, useEffect } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styleHome';
import { logout } from '../ScreenLogin/redux/authSlice';
import { Props } from './utils/type/interfaces';

const ScreenHome: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

 
  const handleBackButton = useCallback(() => {
    BackHandler.exitApp();
    return true; 
  }, []);

  useFocusEffect(
    useCallback(() => {
      
      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

      return () => backHandler.remove();
    }, [handleBackButton])
  );

  // useEffect(() => {
  //   return () => {
  //     // cleanup if needed
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ScreenHome;

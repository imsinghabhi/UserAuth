import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../ScreenLogin/redux/authSlice';
import { storage } from '../../utils/Storage/mmkv';

const SplashScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const token = storage.getString('authToken');
      if (token) {
        dispatch(login('User'));
      }
    };

    const timeoutId = setTimeout(checkAuth, 1000);

    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hold on!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});

export default SplashScreen;

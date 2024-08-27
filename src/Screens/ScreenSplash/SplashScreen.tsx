import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
    <LinearGradient
      colors={['#000000', '#434343']} // Gradient colors from black to dark grey
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.glassContainer}>
        <Text style={styles.title}>Hold on!!</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glassContainer: {
    width: '80%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // semi-transparent white
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8, // elevation for Android
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default SplashScreen;

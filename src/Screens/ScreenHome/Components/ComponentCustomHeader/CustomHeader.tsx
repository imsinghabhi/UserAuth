import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../../ScreenLogin/redux/authSlice';
import { logoutUser } from '../../../ScreenLogin/redux/authService';
import { HomeScreenNavigationProp } from '../../utils/type/interfaces';
import styles from './styles';

interface CustomHeaderProps {
  title: string;
  navigation: HomeScreenNavigationProp;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutUser();
       dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};


export default CustomHeader;

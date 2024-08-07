// CustomHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../../ScreenLogin/redux/authSlice';
import { HomeScreenNavigationProp } from '../../utils/type/interfaces';

interface CustomHeaderProps {
  title: string;
  navigation: HomeScreenNavigationProp;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // navigation.navigate('Login');
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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginRight: 15,
  },
  logoutText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default CustomHeader;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenRegister from '../Screens/ScreenRegister/ScreenRegister';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';
import { TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../Screens/ScreenLogin/redux/authSlice'; // Import the logout action
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../utils/interfaces/RootStackParamList';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Stack = createStackNavigator<RootStackParamList>();

const LogoutButton: React.FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
      <Text style={{ color: '#007AFF', fontSize: 16 }}>Logout</Text>
    </TouchableOpacity>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Register" component={ScreenRegister} />
      <Stack.Screen
        name="Home"
        component={ScreenHome}
        options={({ navigation }) => ({
          headerRight: () => <LogoutButton navigation={navigation as HomeScreenNavigationProp} />,
          headerLeft: () => null,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

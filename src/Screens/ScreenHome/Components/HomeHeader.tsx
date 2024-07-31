// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../ScreenLogin/redux/authSlice';
// import { Props } from '../utils/type/interfaces';

// const HomeHeader: React.FC<Props> = ({ navigation }) => {
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     console.log('Logout button pressed'); 
//     dispatch(logout());
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.headerContainer}>
//       <Text style={styles.title}>Welcome to the Home Screen</Text>
//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Text style={styles.logoutButtonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   logoutButton: {
//     backgroundColor: '#007bff', // Example color for the button
//     padding: 10,
//     borderRadius: 5,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default HomeHeader;

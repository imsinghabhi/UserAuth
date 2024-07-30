// import React, { useCallback } from 'react';
// import { View, Text, Button, BackHandler, Alert } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { useFocusEffect } from '@react-navigation/native';
// import styles from './styleHome';
// import { logout } from '../ScreenLogin/redux/authSlice';
// import { Props } from './utils/type/interfaces';

// const ScreenHome: React.FC<Props> = ({ navigation }) => {
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigation.navigate('Login');
//   };

//   // Function to handle back button press
//   const handleBackButton = useCallback(() => {
//     // Check if we are on the Home screen
//     if (navigation.isFocused()) {
//       // Show a confirmation alert before exiting
//       Alert.alert('Exit App', 'Do you really want to exit?', [
//         {
//           text: 'Cancel',
//           onPress: () => null,
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => BackHandler.exitApp(),
//         },
//       ]);
//       return true; // Indicate that the back button press has been handled
//     }
//     return false; // Let the navigation handle the back press if not on Home screen
//   }, [navigation]);

//   useFocusEffect(
//     useCallback(() => {
//       // Add event listener for hardware back button press
//       const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

//       // Cleanup function to remove the event listener
//       return () => backHandler.remove();
//     }, [handleBackButton])
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the Home Screen</Text>
//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// };

// export default ScreenHome;


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

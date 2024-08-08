// // import React, { useEffect } from 'react';
// // import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// // import { useDispatch } from 'react-redux';
// // import { login } from '../ScreenLogin/redux/authSlice';
// // import { storage } from '../../utils/Storage/mmkv'; 
// // import { HomeScreenNavigationProp } from '../ScreenHome/utils/type/interfaces';

// // interface SplashScreenProps {
// //   navigation: HomeScreenNavigationProp;
// // }

// // const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
// //   const dispatch = useDispatch();

// // //   useEffect(() => {
// // //     const checkAuth = async () => {
// // //       const token = storage.getString('authToken');
// // //       if (token) {
// // //         dispatch(login('User'));
       
// // //       } else {
        
// // //       }
// // //     };

// // //     const timeoutId = setTimeout(checkAuth, 3000);

// // //     return () => clearTimeout(timeoutId);
// // //   }, [dispatch, navigation]);

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome to MyApp</Text>
// //       {/* <ActivityIndicator size="large" color="#fff" /> */}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#90EE90',
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 20,
// //   },
// // });

// // export default SplashScreen;


// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { login } from '../ScreenLogin/redux/authSlice';
// import { storage } from '../../utils/Storage/mmkv';
// import { HomeScreenNavigationProp } from '../ScreenHome/utils/type/interfaces';

// interface SplashScreenProps {
//   navigation: HomeScreenNavigationProp;
// }

// const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = storage.getString('authToken');
//       if (token) {
//         dispatch(login('User'));
//         navigation.replace('App');
//       } else {
//         navigation.replace('Auth');
//       }
//     };

//     const timeoutId = setTimeout(checkAuth, 3000);

//     return () => clearTimeout(timeoutId);
//   }, [dispatch, navigation]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to MyApp</Text>
//       <ActivityIndicator size="large" color="#fff" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#90EE90',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 20,
//   },
// });

// export default SplashScreen;


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

    const timeoutId = setTimeout(checkAuth, 3000);

    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp</Text>
      {/* <ActivityIndicator size="large" color="#fff" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90EE90',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});

export default SplashScreen;

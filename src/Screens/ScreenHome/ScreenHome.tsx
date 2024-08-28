import React, { useEffect, useRef } from 'react';
import { SafeAreaView, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImageDataRequest } from './redux/imageSlice'; 
import ImageList from './Components/ComponentImageList/ImageList';
import LoadingScreen from './Components/ComponentLoader/LoadingScreen';
import { RootState } from '../../redux/store';
import styles from './styleHome';
import CustomHeader from './Components/ComponentCustomHeader/CustomHeader';
import { HomeScreenNavigationProp } from './utils/type/interfaces';
import { HomeScreenProp } from '../../utils/interfaces/RootStackParamList';

const ScreenHome: React.FC<HomeScreenProp> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data: imageData, loading, error } = useSelector((state: RootState) => state.images);

 
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;  

  useEffect(() => {
    dispatch(fetchImageDataRequest());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
    
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000, 
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          stiffness:100,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  // if (error) {
  //   return <ErrorScreen error={error} />;
  // }

  return (
    <SafeAreaView style={styles.HomeScreenContainer}>
      <CustomHeader title="Home" navigation={navigation as HomeScreenNavigationProp} />
      <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
        <ImageList imageData={imageData} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default ScreenHome;

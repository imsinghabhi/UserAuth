import React, { useEffect, useCallback } from 'react';
import { View, BackHandler, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { fetchImageDataRequest } from '../ScreenHome/redux/imageSlice'; 
import ImageList from './Components/ComponentImageList/ImageList';
import LoadingScreen from './Components/ComponentLoader/LoadingScreen';
import ErrorScreen from './Components/ComponentError/ErrorScreen';
import { Props } from './utils/type/interfaces';
import { RootState } from '../../utils/redux/store';
import styles from './styleHome';


const ScreenHome: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { data: imageData, loading, error } = useSelector((state: RootState) => state.images);

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

  useEffect(() => {
    dispatch(fetchImageDataRequest()); 
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <SafeAreaView style={styles.HomeScreenContainer}>
      <ImageList imageData={imageData} />
    </SafeAreaView>
  );
};


export default ScreenHome;

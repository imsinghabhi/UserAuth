import React, { useEffect, useCallback } from 'react';
import { View, BackHandler, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { fetchImageDataRequest } from '../ScreenHome/redux/imageSlice'; 
// import HomeHeader from './Components/HomeHeader';
import ImageList from './Components/ImageList';
import LoadingScreen from './Components/LoadingScreen';
import ErrorScreen from './Components/ErrorScreen';
import { Props } from './utils/type/interfaces';
import { RootState } from '../../utils/redux/store';

const ScreenHome: React.FC<Props> = ({ navigation }) => {
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
    dispatch(fetchImageDataRequest()); // Dispatch the action to fetch image data
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <HomeHeader navigation={navigation} /> */}
      <ImageList imageData={imageData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#DFD3C3', // Background color
    padding: 10, // Padding to ensure content is not touching edges
  },
});

export default ScreenHome;

import React, { useEffect, useCallback } from 'react';
import { View, BackHandler, SafeAreaView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { fetchImageDataRequest } from './redux/imageSlice'; 
import ImageList from './Components/ComponentImageList/ImageList';
import LoadingScreen from './Components/ComponentLoader/LoadingScreen';
import ErrorScreen from './Components/ComponentError/ErrorScreen';
import { Props } from './utils/type/interfaces';
import { RootState } from '../../utils/redux/store';
import styles from './styleHome';
import CustomHeader from './Components/ComponentCustomHeader/CustomHeader';
import { HomeScreenNavigationProp } from './utils/type/interfaces';

const ScreenHome: React.FC<Props> = ({ navigation }) => {
   const dispatch = useDispatch();
  const { data: imageData, loading, error } = useSelector((state: RootState) => state.images);
  
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
      {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <CustomHeader title="Home" navigation={navigation as HomeScreenNavigationProp} />
      <ImageList imageData={imageData} />
    </SafeAreaView>
  );
};

export default ScreenHome;


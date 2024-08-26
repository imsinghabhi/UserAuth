import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import FavIcon from '../../../../assets/FavIcon';
import DownloadIcon from '../../../../assets/DownloadIcon';
import ViewIcon from '../../../../assets/ViewsIcon';
import styles from './styles';
import { ImageData } from '../../utils/type/interfaces';

const ImageItem: React.FC<{ item: ImageData; onPress?: () => void }> = ({ item, onPress }) => {
  const [scaleAnim] = useState(new Animated.Value(1)); 

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.5, 
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.Image
        source={{ uri: item.largeImageURL }}
        style={[styles.ApiImage, { transform: [{ scale: scaleAnim }] }]}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.ImgTag}>Tags: {item.tags}</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconTextContainer}>
            <FavIcon width={16} height={16} color="#000" />
            <Text style={styles.iconText}>{item.likes}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <DownloadIcon width={16} height={16} color="#000" />
            <Text style={styles.iconText}>{item.downloads}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <ViewIcon width={16} height={16} color="#000" />
            <Text style={styles.iconText}>{item.views}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageItem;

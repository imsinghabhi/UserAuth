import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import FavIcon from '../../../assets/FavIcon';
import DownloadIcon from '../../../assets/DownloadIcon';
import ViewIcon from '../../../assets/ViewsIcon';

const screenWidth = Dimensions.get('window').width;

interface ImageData {
  largeImageURL: string;
  tags: string;
  likes: number;
  downloads: number;
  views: number;
}

const ImageItem: React.FC<{ item: ImageData; onPress?: () => void }> = ({ item, onPress }) => (
  <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
    <Image source={{ uri: item.largeImageURL }} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.tag}>Tags: {item.tags}</Text>
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

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 10,
    marginHorizontal: 5,
    width: screenWidth - 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: screenWidth / 2 - 20,
  },
  infoContainer: {
    padding: 10,
  },
  tag: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 5,
    fontSize: 12,
  },
});

export default ImageItem;

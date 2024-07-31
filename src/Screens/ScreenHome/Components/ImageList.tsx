import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ImageItem from './ImageItem';

interface ImageData {
  largeImageURL: string;
  tags: string;
  likes: number;
  downloads: number;
  views: number;
}        

const ImageList: React.FC<{ imageData: ImageData[] }> = ({ imageData }) => (
  <FlatList
    data={imageData}
    renderItem={({ item }) => <ImageItem item={item} />}
    keyExtractor={(item) => item.largeImageURL}
    contentContainerStyle={styles.flatListContent}
  />
);

const styles = StyleSheet.create({
  flatListContent: {
    alignItems: 'center',
    padding: 10,
  }
});

export default ImageList;

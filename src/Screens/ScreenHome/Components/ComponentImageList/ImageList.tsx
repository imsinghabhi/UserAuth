import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ImageItem from '../ComponentImageItem/ImageItem';
import ImageData from '../ComponentImageItem/interfaces';
import styles from './styles';

const ImageList: React.FC<{ imageData: ImageData[] }> = ({ imageData }) => (
  <FlatList
    data={imageData}
    renderItem={({ item }) => <ImageItem item={item} />}
    keyExtractor={(item) => item.largeImageURL}
    contentContainerStyle={styles.flatListContent}
  />
);


export default ImageList;

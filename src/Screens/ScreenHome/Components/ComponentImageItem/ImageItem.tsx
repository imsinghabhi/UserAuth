import React from 'react';
import { View, Text, Image,  TouchableOpacity } from 'react-native';
import FavIcon from '../../../../assets/FavIcon';
import DownloadIcon from '../../../../assets/DownloadIcon';
import ViewIcon from '../../../../assets/ViewsIcon';
import styles from './styles';
import ImageData from './interfaces';



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


export default ImageItem;

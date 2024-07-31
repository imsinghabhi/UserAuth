import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../utils/interfaces/RootStackParamList';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;


export type Props = {
    navigation: HomeScreenNavigationProp;
  };

  export interface ImageData {
    largeImageURL: string;
    tags: string;
    likes: number;
    downloads: number;
    views: number;
  }

  export interface FetchImageDataResponse {
    hits: ImageData[];
    total: number;
    totalHits: number;
  }
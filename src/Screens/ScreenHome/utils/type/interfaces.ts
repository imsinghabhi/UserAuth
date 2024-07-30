import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../utils/interfaces/RootStackParamList';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;


export type Props = {
    navigation: HomeScreenNavigationProp;
  };
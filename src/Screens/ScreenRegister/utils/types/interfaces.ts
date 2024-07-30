import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../utils/interfaces/RootStackParamList';

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;




export type FormValues = {
    name: string;
    email: string;
    phone: string;
    username: string;
    password: string;
  };
  
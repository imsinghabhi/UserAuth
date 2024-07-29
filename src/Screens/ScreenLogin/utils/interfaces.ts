// src/utils/interfaces/interfaces.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../utils/interfaces/RootStackParamList';

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type FormValues = {
    username: string;
    password: string;
  };
  
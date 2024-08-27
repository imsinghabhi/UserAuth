import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Splash: undefined;
  App: undefined;
  Auth: undefined;
};

export type HomeScreenProp = StackScreenProps<RootStackParamList,'Home'>;
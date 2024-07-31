import { combineEpics, Epic } from 'redux-observable';
import { authEpic } from '../../Screens/ScreenLogin/redux/authEpic';
import fetchImageDataEpic from '../../Screens/ScreenHome/redux/imageEpic';
import { AuthActions } from '../../Screens/ScreenLogin/redux/authSlice';
import { ImageActions } from '../../Screens/ScreenHome/redux/imageSlice';

type RootActions = ReturnType<AuthActions[keyof AuthActions]> | ReturnType<ImageActions[keyof ImageActions]>;

const epics: Epic[] = [
  authEpic,
  fetchImageDataEpic
] as Epic[];

export const rootEpic = combineEpics(...epics);

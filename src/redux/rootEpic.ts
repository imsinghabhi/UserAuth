import { combineEpics, Epic } from 'redux-observable';
import { authEpic } from '../Screens/ScreenLogin/redux/authEpic';
import fetchImageDataEpic from '../Screens/ScreenHome/redux/imageEpic';


const epics: Epic[] = [
  // authEpic,
  fetchImageDataEpic
] as Epic[];

export const rootEpic = combineEpics(...epics);

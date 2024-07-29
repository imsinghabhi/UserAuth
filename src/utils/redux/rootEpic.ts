
import { combineEpics } from 'redux-observable';
import { authEpic } from '../../Screens/ScreenLogin/redux/authEpic';

export const rootEpic = combineEpics(authEpic);

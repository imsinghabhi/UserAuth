import { ofType } from 'redux-observable'
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { login, logout } from './authSlice';

export const authEpic = (action$: any) =>
  action$.pipe(
    ofType(login.type),
    mergeMap((action: any) =>
      of(action).pipe(
        // side effects yha pe
      )
    )
  );

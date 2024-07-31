import { ofType, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { login,ActionsAuth } from './authSlice'; 
import { Observable } from 'rxjs';



export const authEpic = (action$:Observable<ActionsAuth>) =>
  action$.pipe(
    ofType(login.type),
    mergeMap((action) =>
      of(action).pipe(
        // side effects yha pe
      )
    )
  );

import { ofType, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { login, logout, AuthActions } from './authSlice'; // Ensure AuthActions is exported from authSlice

// Type for actions handled by this epic
type AuthEpicActions = ReturnType<typeof login | typeof logout>;

// Type for action$
type AuthEpic = Epic<AuthEpicActions, AuthEpicActions>;

// Refactor authEpic with proper typing
export const authEpic: AuthEpic = (action$) =>
  action$.pipe(
    ofType(login.type),
    mergeMap((action) =>
      of(action).pipe(
        // side effects yha pe
      )
    )
  );

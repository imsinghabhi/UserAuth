import { ofType, Epic } from 'redux-observable';
import { switchMap, catchError, of, Observable } from 'rxjs';
import { fetchImageDataRequest, fetchImageDataSuccess, fetchImageDataFailure } from './imageSlice';
import { ActionsImage } from './imageSlice';
import { fetchImageDataFromApi } from '../utils/Services/ApiCall'; 

const fetchImageDataEpic: Epic<ActionsImage, ActionsImage, any> = (action$) =>
  action$.pipe(
    ofType(fetchImageDataRequest.type),
    switchMap(() =>
      fetchImageDataFromApi().pipe(
        switchMap(response => {
          if (response && response.hits) {
            return of(fetchImageDataSuccess(response.hits));
          } else {
            throw new Error('Invalid API response');
          }
        }),
        catchError(error => {
          console.error('API Error:', error);
          return of(fetchImageDataFailure(error.message));
        })
      )
    )
  );

export default fetchImageDataEpic;

import { ofType, Epic } from 'redux-observable';
import { mergeMap, catchError, of, from, Observable } from 'rxjs';
import { fetchImageDataRequest, fetchImageDataSuccess, fetchImageDataFailure } from './imageSlice';
import { ActionsImage } from './imageSlice';
import { makeGetRequest } from '../utils/Services/AxiosInstance'; 

const fetchImageDataEpic: Epic<ActionsImage> = (action$: Observable<ActionsImage>) =>
  action$.pipe(
    ofType(fetchImageDataRequest.type),
    mergeMap(() =>
      from(makeGetRequest('?q=flower&image_type=photo&per_page=10')).pipe( 
        mergeMap(response => {
          if (response.data && response.data.hits) {
            return of(fetchImageDataSuccess(response.data.hits));
          } else {
            throw new Error('Invalid API response');
          }
        }),
        catchError(error => {
          console.error('API Error:', error);
          return of(fetchImageDataFailure(error instanceof Error ? error.message : 'An unexpected error occurred'));
        })
      )
    )
  );

export default fetchImageDataEpic;




//previous code using axios.

// import { ofType, Epic } from 'redux-observable';
// import { switchMap, catchError, of, Observable } from 'rxjs';
// import { fetchImageDataRequest, fetchImageDataSuccess, fetchImageDataFailure } from './imageSlice';
// import { ActionsImage } from './imageSlice';
// import { fetchImageDataFromApi } from '../utils/Services/ApiCall'; 

// const fetchImageDataEpic = (action$:Observable<ActionsImage>) =>
//   action$.pipe(
//     ofType(fetchImageDataRequest.type),
//     switchMap(() =>
//       fetchImageDataFromApi().pipe(
//         switchMap(response => {
//           if (response && response.hits) {
//             return of(fetchImageDataSuccess(response.hits));
//           } else {
//             throw new Error('Invalid API response');
//           }
//         }),
//         catchError(error => {
//           console.error('API Error:', error);
//           return of(fetchImageDataFailure(error.message));
//         })
//       )
//     )
//   );

// export default fetchImageDataEpic;





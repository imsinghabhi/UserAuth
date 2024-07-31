import { ofType, Epic } from 'redux-observable';
import { switchMap, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fetchImageDataRequest, fetchImageDataSuccess, fetchImageDataFailure } from './imageSlice';
import { RootState } from '../../../utils/redux/store';
import { Action } from '@reduxjs/toolkit';

type Actions = ReturnType<typeof fetchImageDataRequest> | ReturnType<typeof fetchImageDataSuccess> | ReturnType<typeof fetchImageDataFailure>;

const fetchImageDataEpic: Epic<Actions, Actions, RootState> = (action$) =>
  action$.pipe(
    ofType(fetchImageDataRequest.type),
    switchMap(() =>
      ajax.getJSON('https://pixabay.com/api/?key=45184497-ebcc43428b5fcf50ae0b6a6d3&q=flower&image_type=photo&per_page=10').pipe(
        switchMap((response: any) => of(fetchImageDataSuccess(response.hits))),
        catchError(error => of(fetchImageDataFailure(error.message)))
      )
    )
  );

export default fetchImageDataEpic;

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, flatMap, mergeMap, delay } from 'rxjs/operators';
import { forkJoin, Observable, Observer, of, throwError, zip } from 'rxjs';

import {
  USER_LOAD,
  UserLoad,
  UserLoadSuccess,
  UserLoadFail,

} from './user.actions';

import { UserState } from './user.models';
// import { environment } from '../../../environments/environment';
import { ajax } from 'rxjs/ajax';
import { Store } from '@ngrx/store';
import { AppState } from '..';
// import { HttpBaseService } from 'src/app/core/services/http.base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    // private httpBase: HttpBaseService,
    private store: Store<AppState>,
    private httpClient: HttpClient 
  ) {
    this.origin = 'environment.beOrigin';
  }
  origin: string;


  userLoad$ = createEffect((): any => this.actions$.pipe(
    ofType(USER_LOAD),
    mergeMap(
      (action: UserLoad) => {
        debugger;
        const urlRecords: any = action.payload;
        // return this.httpBase.getCommon(`${urlRecords}`).pipe(
          return this.httpClient.get<any>(`${urlRecords}`).pipe(
      
          map((res: any) => {
            debugger;
            return new UserLoadSuccess(res);
          }),
          catchError(error => {
            debugger;
            return of(new UserLoadFail(error));
          })
        );
      }
    )
  )
  );

}

import { Injectable } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import {AppState} from './app.reducer';
import * as fromUsersReducer from './users-app/store/users-app.reducer';
import * as fromHomeReducer from './home/store/home.reducer';
import * as fromLoginReducer from './login/store/login.reducer';
import * as fromAuthReducer from './auth/store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AppReducerService {

  constructor() { }

  getReducers(): ActionReducerMap<AppState>{
    return {
      homeState: fromHomeReducer.reducer,
      userState : fromUsersReducer.reducer,
      loginState: fromLoginReducer.reducer,
      authState: fromAuthReducer.reducer,
    };
  }
}

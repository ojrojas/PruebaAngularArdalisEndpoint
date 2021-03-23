import { inject, InjectionToken } from '@angular/core';
import {  ActionReducerMap, createSelector } from '@ngrx/store';
import { AppReducerService} from './app-reducer.service';
import * as fromUserAppReducer from './users-app/store/users-app.reducer';
import * as fromHomeReducer from './home/store/home.reducer';
import * as fromLoginReducer from './login/store/login.reducer';
import * as fromAuthReducer from './auth/store/auth.reducer';

export interface AppState {
    userState: fromUserAppReducer.State;
    homeState: fromHomeReducer.State;
    loginState: fromLoginReducer.State;
    authState: fromAuthReducer.State;
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>
('Registered reducers', {
    factory: () => {
        const serv = inject(AppReducerService);
        return serv.getReducers();
    }
});

export const getAppStateLoginState = (state: AppState) => state.loginState;

export const getAppStateLoginData = createSelector(
    getAppStateLoginState,
    (state) => state
);

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RoutesApis } from 'src/app/core/apis/api.routes';
import { ApiService } from 'src/app/core/apis/api.service';
import { ResponseModel } from 'src/app/models/response.model';
import { HorizontalPosition, VerticalPosition } from 'src/app/models/snack-bar.model';
import { SnackBarService } from 'src/app/shared/components/snack-bar/snack-bar.service';
import { LoginService } from '../services/login.service';
import * as fromActions from './login.actions';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.login),
      concatMap((props) => this.api.postLogin(props.applicationUser, RoutesApis.login).pipe(
        map(response => fromActions.loginSuccess({ token: response.body.data })),
        catchError(error => of(fromActions.OnError({ error }))))
      )
    );
  });

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.loginSuccess),
      tap((props) => {
        if (props.token !== null) {
          const claims = this.service.getClaims(props.token);
          this.authService.setClaimsAuth(claims, props.token);
          this.router.navigate(['/home']);
        } else {
          this.notification.createNotification(
            'Usuarios o contraseña invalidos!',
            'login', 3000,
            HorizontalPosition.end,
            VerticalPosition.bottom);
        }
        return;
      })
    );
  }, { dispatch: false });



  constructor(
    private router: Router,
    private actions$: Actions,
    private service: LoginService,
    private api: ApiService,
    private authService: AuthService,
    private notification: SnackBarService) { }
}

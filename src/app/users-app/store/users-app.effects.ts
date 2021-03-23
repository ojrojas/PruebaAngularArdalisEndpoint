import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { RoutesApis } from 'src/app/core/apis/api.routes';
import { ApiService } from 'src/app/core/apis/api.service';
import { ApplicationUser } from 'src/app/models/application-user.model';
import { ResponseModel } from 'src/app/models/response.model';
import { HorizontalPosition, VerticalPosition } from 'src/app/models/snack-bar.model';
import { TypeIdentification } from 'src/app/models/typeidentification.model';
import { ModalSharedService } from 'src/app/shared/components/modal-shared/services/modal-shared.service';
import { SnackBarService } from 'src/app/shared/components/snack-bar/snack-bar.service';
import { FormComponent } from '../components/form/form.component';
import { UsersAppService } from '../services/users-app.service';
import * as fromActions from './users-app.actions';


@Injectable()
export class UsersAppEffects {

  loadUsersApps$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadUsersApps),
    concatMap(() => this.apiService.getAll<ApplicationUser[]>(RoutesApis.usersApps)
      .pipe(
        map(response => (fromActions.loadUsersAppsSuccess({ applicationUsers: response.body.data }))),
        catchError((error) => of(fromActions.loadUsersAppsFailure({ error }))
        )))
  ));

  loadTypeIdentifications$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadTypeIdentification),
    concatMap(() => this.apiService.getAll<TypeIdentification[]>(RoutesApis.typeIdentification)
      .pipe(
        map(response => (fromActions.loadTypeIdentificationSuccess({ typeIdentifications: response.body.data }))),
        catchError((error) => of(fromActions.loadTypeIdentificationFailure({ error }))
        )))
  ));

  create$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.create),
    concatMap((props) => this.apiService.post<ApplicationUser>(props.applicationUser, RoutesApis.usersApps)
      .pipe(map(response => (fromActions.createSuccess({ applicationUser: response.body.data }))),
        catchError((error) => of(fromActions.createFailure({ error }))
        )))
  ));

  createSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.createSuccess),
    tap((props) => {
      this.modalServices.close();
      this.notification.createNotification(
        'Usuario creado con exito',
        'Users',
        3000,
        HorizontalPosition.end,
        VerticalPosition.bottom);
      this.service.loadApplicationUsers();
    })), { dispatch: false });


    createFailure$ = createEffect(() => this.actions$.pipe(
      ofType(fromActions.createFailure),
      tap((props) => {
        this.modalServices.close();
        debugger;
        this.notification.createNotification(
         this.service.getErrorsRequest(props.error.error.errors),
          'Users',
          3000,
          HorizontalPosition.end,
          VerticalPosition.bottom);
        this.service.loadApplicationUsers();
      })), { dispatch: false });




  edit$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.edit),
    concatMap((props) => this.apiService.put<ApplicationUser>(props.applicationUser, RoutesApis.usersApps)
      .pipe(map(response => (fromActions.editSuccess({ applicationUser: response.body.data }))),
        catchError((error) => of(fromActions.editFailure({ error }))
        )))
  ));

  editSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.editSuccess),
    tap((props) => {
      this.modalServices.close();
      this.notification.createNotification(
        'Usuario editado con exito',
        'Users',
        3000,
        HorizontalPosition.end,
        VerticalPosition.bottom);
      this.service.loadApplicationUsers();
    })), { dispatch: false });

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.deleteUser),
    concatMap((props) => this.apiService.delete<ApplicationUser>(RoutesApis.usersApps, props.applicationUser.id)
      .pipe(map(response => (fromActions.deleteUserSuccess({ applicationUser: response.body.data }))),
        catchError((error) => of(fromActions.deleteUserFailure({ error }))
        )))
  ));

  deleteUserSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.deleteUserSuccess),
    tap((props) => {
      this.modalServices.close();
      this.notification.createNotification(
        'Usuario eliminado con exito',
        'Users',
        3000,
        HorizontalPosition.end,
        VerticalPosition.bottom);
      this.service.loadApplicationUsers();
    })), { dispatch: false });

  launchModal$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.launchModal),
    tap((props) => this.modalServices.open({
      title: props.title,
      component: FormComponent,
      CssStyles: {
        width: '900px'
      },
      parameters: [
        {mode: props.mode},
        {applicationUser: props.applicationUser}
      ]
    }))), { dispatch: false });

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private modalServices: ModalSharedService,
    private notification: SnackBarService,
    private service: UsersAppService
  ) { }

}

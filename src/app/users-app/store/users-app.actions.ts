import { createAction, props } from '@ngrx/store';
import { ApplicationUser } from 'src/app/models/application-user.model';
import { EnumsModeForms } from 'src/app/models/enums.model';
import { TypeIdentification } from 'src/app/models/typeidentification.model';

export const loadUsersApps = createAction(
  '[UsersApp] Load UsersApps'
);

export const loadUsersAppsSuccess = createAction(
  '[UsersApp] Load UsersApps Success',
  props<{ applicationUsers: ApplicationUser[] }>()
);

export const loadUsersAppsFailure = createAction(
  '[UsersApp] Load UsersApps Failure',
  props<{ error: any }>()
);

export const create = createAction(
  '[UserApp] Create User',
  props<{ applicationUser: ApplicationUser }>()
);

export const createSuccess = createAction(
  '[UserApp] Create User Success',
  props<{ applicationUser: ApplicationUser }>()
);

export const createFailure = createAction(
  '[UserApp] Create User Failure',
  props<{ error: any }>()
);

export const edit = createAction(
  '[UserApp] Edit User',
  props<{ applicationUser: ApplicationUser }>()
);

export const editSuccess = createAction(
  '[UserApp] Edit User Success',
  props<{ applicationUser: ApplicationUser }>()
);

export const editFailure = createAction(
  '[UserApp] Edit User Failure',
  props<{ error: any }>()
);

export const deleteUser = createAction(
  '[UserApp] Delete User',
  props<{ applicationUser: ApplicationUser }>()
);

export const deleteUserSuccess = createAction(
  '[UserApp] Delete User Success',
  props<{ applicationUser: ApplicationUser }>()
);

export const deleteUserFailure = createAction(
  '[UserApp] Delete User Failure',
  props<{ error: any }>()
);

export const loadTypeIdentification = createAction(
  '[UserApp] load Type Idenfitication'
);

export const loadTypeIdentificationSuccess = createAction(
  '[UserApp] load Type Idenfitication Success',
  props<{ typeIdentifications: TypeIdentification[] }>()
);

export const loadTypeIdentificationFailure = createAction(
  '[UserApp] load Type Idenfitication Failure',
  props<{ error: any }>()
);


export const launchModal = createAction(
  '[UserApp] launch modal forms',
  props<{mode: EnumsModeForms, applicationUser: ApplicationUser, title: string}>()
);





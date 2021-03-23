import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationUser } from 'src/app/models/application-user.model';
import { ConfigButtons, HeaderModel } from 'src/app/models/hader.model';
import { State } from '../store/users-app.reducer';
import { getApplicationUsers, getStateUserApps } from '../store/users-app.selectors';
import * as fromActions from '../store/users-app.actions';
import { ModalSharedService } from 'src/app/shared/components/modal-shared/services/modal-shared.service';
import { FormComponent } from '../components/form/form.component';
import { EnumsModeForms } from 'src/app/models/enums.model';

@Injectable({
  providedIn: 'root'
})
export class UsersAppService {

  constructor(
    private store: Store<State>,
    private modalService: ModalSharedService
  ) { }

  getState(): Observable<State> {
    return this.store.pipe(select(getStateUserApps));
  }

  loadApplicationUsers(): void {
    this.store.dispatch(fromActions.loadUsersApps());
  }

  loadTypeIdentification(): void {
    this.store.dispatch(fromActions.loadTypeIdentification());
  }

  getLoadApplicationUsers(): Observable<ApplicationUser[]> {
    return this.store.pipe(select(getApplicationUsers));
  }

  create(applicationUser: ApplicationUser): void {
    this.store.dispatch(fromActions.create({ applicationUser }));
  }

  edit(applicationUser: ApplicationUser): void {
    this.store.dispatch(fromActions.edit({ applicationUser }));
  }

  delete(applicationUser: ApplicationUser): void {
    this.store.dispatch(fromActions.deleteUser({ applicationUser }));
  }

  getHeaderUserModel(): HeaderModel {
    const configButtons = [
      {
        color: 'primary',
        description: 'Add',
        action: this.add.bind(this)
      }
    ] as ConfigButtons[];
    return {
      title: 'Usuarios',
      subtitle: 'Lista de usuarios de aplicación',
      buttons: configButtons
    } as HeaderModel;
  }

  add(): void {
    const applicationUser: ApplicationUser = null;
    this.launchFormModal(EnumsModeForms.Create, applicationUser, 'Crear usuario');
  }

  launchFormModal(mode: EnumsModeForms, applicationUser: ApplicationUser, title: string): void {
    this.store.dispatch(fromActions.launchModal({ mode, applicationUser, title }));
  }

  sendCloseModal(): void {
    this.modalService.close();
  }

  getErrorsRequest(errors: []): string {
    let result = '';
    for (const i in errors) {
      if (i !== undefined) {
        result = result.concat(`${i}: ${errors[i][0]}`, '\n');
      }
    }
    return result;
  }

}

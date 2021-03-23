import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationUser } from 'src/app/models/application-user.model';
import { EnumsModeForms } from 'src/app/models/enums.model';
import { HeaderModel } from 'src/app/models/hader.model';
import { UsersAppService } from '../services/users-app.service';
import { State } from '../store/users-app.reducer';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  state$: Observable<State>;
  headerUserModel: HeaderModel;

  constructor(
    private service: UsersAppService
  ) { }

  ngOnInit(): void {
    this.state$ = this.service.getState();
    this.service.loadApplicationUsers();
    this.service.loadTypeIdentification();
    this.headerUserModel = this.service.getHeaderUserModel();
  }

  edit(applicationUser: ApplicationUser): void {
    this.service.launchFormModal(EnumsModeForms.Edit, applicationUser, 'Editar usuario');
  }

  delete(applicationUser: ApplicationUser): void {
    this.service.launchFormModal(EnumsModeForms.Delete, applicationUser, 'Eliminar usuario');
  }

  detail(applicationUser: ApplicationUser): void {
    this.service.launchFormModal(EnumsModeForms.Detail, applicationUser, 'Detalle de usuario');
  }

}

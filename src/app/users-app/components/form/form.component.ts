import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApplicationUser } from 'src/app/models/application-user.model';
import { EnumsModeForms } from 'src/app/models/enums.model';
import { ModalSharedService } from 'src/app/shared/components/modal-shared/services/modal-shared.service';
import { UsersAppService } from '../../services/users-app.service';
import { State } from '../../store/users-app.reducer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() applicationUser: ApplicationUser;
  @Input() mode: EnumsModeForms;
  form: FormGroup;
  userApp: ApplicationUser;
  userState: Observable<State>;

  constructor(
    private modalServices: ModalSharedService,
    private fb: FormBuilder,
    private service: UsersAppService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userState =  this.service.getState();
    this.authService.getUserApp().subscribe(result => this.userApp = result).unsubscribe();
    switch (this.mode) {
      case EnumsModeForms.Create:
        this.createForm();
        break;
      case EnumsModeForms.Edit:
        this.editForm();
        break;
      case EnumsModeForms.Detail:
        this.detailForm();
        break;
        case EnumsModeForms.Delete:
          this.deleteForm();
          break;
      default:
        break;
    }
  }

  createForm(): void {
    this.form = this.fb.group({
      password: new FormControl({ value: null, disabled: false }, Validators.required),
      email:  new FormControl({ value: null, disabled: false }, Validators.required),
      name:  new FormControl({ value: null, disabled: false }, Validators.required),
      lastName:  new FormControl({ value: null, disabled: false }, Validators.required),
      middleName: new FormControl({ value: null, disabled: false }),
      state:  new FormControl({ value: false, disabled: false }, Validators.required),
      surName: new FormControl({ value: null, disabled: false }),
      identification: new FormControl({ value: null, disabled: false }, Validators.required),
      typeIdentificationId: new FormControl({ value: null, disabled: false }, Validators.required)
    });
  }

  editForm(): void {
    this.form = this.fb.group({
      id: new FormControl({ value: this.applicationUser.id, disabled: false }),
      password: new FormControl({ value: this.applicationUser.password, disabled: false }, Validators.required),
      email:  new FormControl({ value: this.applicationUser.email, disabled: false }, Validators.required),
      name:  new FormControl({ value: this.applicationUser.name, disabled: false }, Validators.required),
      lastName:  new FormControl({ value: this.applicationUser.lastName, disabled: false }, Validators.required),
      middleName: new FormControl({ value: this.applicationUser.middleName, disabled: false }),
      state:  new FormControl({ value: this.applicationUser.state, disabled: false }, Validators.required),
      surName: new FormControl({ value: this.applicationUser.surName, disabled: false }),
      identification: new FormControl({ value: this.applicationUser.identification, disabled: false }, Validators.required),
      typeIdentificationId: new FormControl({ value: this.applicationUser.typeIdentificationId, disabled: false }, Validators.required)
    });
  }

  deleteForm(): void {
    this.form = this.fb.group({
      id: new FormControl({ value: this.applicationUser.id, disabled: false }),
      password: new FormControl({ value: this.applicationUser.password, disabled: true }),
      email:  new FormControl({ value: this.applicationUser.email, disabled: true }),
      name:  new FormControl({ value: this.applicationUser.name, disabled: true }),
      lastName:  new FormControl({ value: this.applicationUser.lastName, disabled: true }),
      middleName: new FormControl({ value: this.applicationUser.middleName, disabled: true }),
      state:  new FormControl({ value: this.applicationUser.state, disabled: true }),
      surName: new FormControl({ value: this.applicationUser.surName, disabled: true }),
      identification:  new FormControl({ value: this.applicationUser.identification, disabled: true }),
      typeIdentificationId:  new FormControl({ value: this.applicationUser.typeIdentificationId, disabled: true }),
    });
  }

  detailForm(): void {
    this.form = this.fb.group({
      id: new FormControl({ value: this.applicationUser.id, disabled: true }),
      password: new FormControl({ value: this.applicationUser.password, disabled: true }, Validators.required),
      email:  new FormControl({ value: this.applicationUser.email, disabled: true }, Validators.required),
      name:  new FormControl({ value: this.applicationUser.name, disabled: true }, Validators.required),
      lastName:  new FormControl({ value: this.applicationUser.lastName, disabled: true }, Validators.required),
      middleName: new FormControl({ value: this.applicationUser.middleName, disabled: true }),
      state:  new FormControl({ value: this.applicationUser.state, disabled: true }, Validators.required),
      surName: new FormControl({ value: this.applicationUser.surName, disabled: true }),
      identification: new FormControl({ value: this.applicationUser.identification, disabled: true }, Validators.required),
      typeIdentificationId: new FormControl({ value: this.applicationUser.typeIdentificationId, disabled: true }, Validators.required)
    });
  }

  close(): void {
    this.modalServices.close();
  }

  submit(): void {
    if (this.form.valid) {
      switch (this.mode) {
        case EnumsModeForms.Create:
          this.service.create(this.sendValueCreate());
          break;
        case EnumsModeForms.Edit:
          this.service.edit(this.sendValueEdit());
          break;
          case EnumsModeForms.Delete:
            this.service.delete(this.sendValueEdit());
            break;
        default:
          break;
      }
    } else {
      this.markValidityForm();
    }
  }

  sendValueCreate(): ApplicationUser {
    debugger;
    return {
      password: this.form.value.password,
      email: this.form.value.email,
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      middleName: this.form.value.middleName,
      surName: this.form.value.surName,
      state: this.form.value.state,
      createdBy: this.userApp.id,
      createdOn: new Date(),
      identification: this.form.value.identification.toString(),
      typeIdentificationId: this.form.value.typeIdentificationId
    } as ApplicationUser;
  }

  sendValueEdit(): ApplicationUser {
    debugger;
    return {
      id: this.form.value.id,
      password: this.form.value.password,
      email: this.form.value.email,
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      middleName: this.form.value.middleName,
      surName: this.form.value.surName,
      state: this.form.value.state,
      modifiedBy: this.userApp.id,
      modifiedOn: new Date(),
      identification: this.form.value.identification.toString(),
      typeIdentificationId: this.form.value.typeIdentificationId
    } as ApplicationUser;
  }

  markValidityForm(): void {
    for (const control in this.form.controls) {
      this.form.controls[control].markAsDirty();
      this.form.controls[control].markAsTouched();
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './components/form/form.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login.effects';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './store/login.reducer';


@NgModule({
  declarations: [ContainerComponent, FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromReducer.loginFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class LoginModule { }

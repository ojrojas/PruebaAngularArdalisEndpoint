import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersAppRoutingModule } from './users-app-routing.module';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './store/users-app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersAppEffects } from './store/users-app.effects';
import {  MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ContainerComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersAppRoutingModule,
    StoreModule.forFeature(fromReducer.usersAppFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([UsersAppEffects])
  ]
})
export class UsersAppModule { }

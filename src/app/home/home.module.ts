import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainerComponent } from './container/container.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './store/home.reducer';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromReducer.homeFeatureKey, fromReducer.reducer)
  ]
})
export class HomeModule { }

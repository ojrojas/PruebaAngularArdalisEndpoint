import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../auth/store/auth.effects';
import * as fromReducer from '../auth/store/auth.reducer';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    StoreModule.forFeature(fromReducer.authFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class LayoutModule { }

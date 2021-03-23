import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducer from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';


@NgModule({
  declarations: [UnauthorizeComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromReducer.authFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }

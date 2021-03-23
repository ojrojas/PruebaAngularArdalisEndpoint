import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../auth/auth-guard.guard';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardGuard],
    component: SideBarComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(h => h.HomeModule)
      },
      {
        path: 'users-app',
        loadChildren: () => import('../users-app/users-app.module').then(u => u.UsersAppModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

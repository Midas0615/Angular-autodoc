import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import {
  LoginComponent,
  RegisterComponent,
  ClaimNewComponent,
  ClaimDetailsComponent,
  ProfileViewComponent,
  ProfileEditComponent
} from './pages';
import { AuthGuard } from './core';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  { path: 'claim', component: ClaimNewComponent, canActivate: [AuthGuard] },
  { path: 'claim/:id', component: ClaimDetailsComponent, canActivate: [AuthGuard] },
  {
    path: 'profile/view',
    component: ProfileViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/edit',
    component: ProfileEditComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

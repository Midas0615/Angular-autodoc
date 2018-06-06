import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClaimNewComponent } from './claim-new/claim-new.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { AuthGuard } from '../core';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'home',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  { path: 'claim', component: ClaimNewComponent },
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

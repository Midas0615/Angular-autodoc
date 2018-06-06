import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MdModule } from '../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaimNewComponent } from './claim-new/claim-new.component';
import { MainComponent } from './main/main.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    LoginComponent,
    RegisterComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    ClaimNewComponent,
    ClaimDetailsComponent
  ]
})
export class PagesModule { }

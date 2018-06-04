import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
// import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../core';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  imports: [
    // SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CustomMaterialModule
  ],
  declarations: [
    AuthComponent
  ],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}

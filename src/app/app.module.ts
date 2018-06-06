import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SharedModule, HeaderComponent, FooterComponent } from './shared';
import {
  MainComponent,
  LoginComponent,
  RegisterComponent,
  ProfileViewComponent,
  ProfileEditComponent,
  ClaimNewComponent,
  ClaimDetailsComponent } from './pages';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    ClaimNewComponent,
    ClaimDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

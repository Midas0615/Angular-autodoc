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
import { StatusPipe } from './pages/main/status.pipe';


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
    FooterComponent,
    StatusPipe
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { SharedModule, HeaderComponent, FooterComponent } from './shared';
import { ClaimComponent } from './claim/claim.component';
import { ClaimDetailsComponent } from './claim/claim-details/claim-details.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { ProfileModule } from './profile/profile.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClaimComponent,
    ClaimDetailsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ProfileModule,
    HomeModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

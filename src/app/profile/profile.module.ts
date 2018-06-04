import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ProfileRoutingModule,
    CustomMaterialModule,
    SharedModule
  ],
  declarations: [
    ProfileViewComponent,
    ProfileEditComponent
  ]
})
export class ProfileModule { }

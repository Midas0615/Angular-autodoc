import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdModule } from './md/md.module';
import { ListErrorsComponent } from './list-errors.component';
import { ToastrModule } from 'ngx-toastr';
import { ClaimStatusPipe } from './claim-status.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MdModule,
    ToastrModule.forRoot({
      timeOut: 30000
    })
  ],
  declarations: [
    ListErrorsComponent,
    ClaimStatusPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MdModule,
    ListErrorsComponent,
    ToastrModule,
    ClaimStatusPipe
  ]
})
export class SharedModule {}

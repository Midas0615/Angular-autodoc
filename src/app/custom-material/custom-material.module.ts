import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class CustomMaterialModule { }

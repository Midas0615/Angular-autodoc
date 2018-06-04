import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [
    // ArticleListComponent,
    // ArticleMetaComponent,
    // ArticlePreviewComponent,
    CommonModule,
    // FavoriteButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ListErrorsComponent,
    RouterModule,
    // ShowAuthedDirective
    BrowserAnimationsModule
  ]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TaxRoutingModule } from './tax.routing.module';
import { CommonModule } from '@angular/common';
import { TaxComponent } from './tax.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AddEditComponent } from './add-edit/add-edit.component'



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaxRoutingModule
    // BrowserAnimationsModule
  ],
  declarations: [TaxComponent, ArticleListComponent, AddEditComponent]
})
export class TaxModule { }

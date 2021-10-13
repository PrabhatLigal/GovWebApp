import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BirthComponent } from './birth.component';
import { BirthRoutingModule } from './birth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    BirthRoutingModule
  ],
  declarations: [BirthComponent]
})
export class BirthModule { }

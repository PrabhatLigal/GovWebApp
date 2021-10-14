import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BirthComponent } from './birth.component';
import { BirthRoutingModule } from './birth-routing.module';
import { BirthRegisterComponent } from './birth-register/birth-register.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    BirthRoutingModule
  ],
  declarations: [BirthComponent, BirthRegisterComponent]
})
export class BirthModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CovidComponent } from './covid.component';
import { CovidRoutingModule } from './covid-routing.module';
import { CovidRegisterComponent } from './covid-register/covid-register.component'
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit/add-edit.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CovidRoutingModule,
  ],
  declarations: [CovidComponent, CovidRegisterComponent, AddEditComponent]
})
export class CovidModule { }

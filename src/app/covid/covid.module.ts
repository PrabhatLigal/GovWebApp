import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CovidComponent } from './covid.component';
import { CovidRoutingModule } from './covid-routing.module';
import { CovidRegisterComponent } from './covid-register/covid-register.component'
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit/add-edit.component'
import { QRCodeModule } from 'angular2-qrcode';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CovidRoutingModule,
    QRCodeModule,
    NzButtonModule,
    NzModalModule,
    // BrowserAnimationsModule
  ],
  declarations: [CovidComponent, CovidRegisterComponent, AddEditComponent]
})
export class CovidModule { }

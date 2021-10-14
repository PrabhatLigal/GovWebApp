import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService, CovidService } from '@app/_services';
import { MustMatch } from '@app/_helpers';
@Component({
  selector: 'app-covid-register',
  templateUrl: './covid-register.component.html',
  styleUrls: ['./covid-register.component.less']
})
export class CovidRegisterComponent implements OnInit {

  locations: any[];

  public code: string = null;
  public isVisible = false;
  public title:string = null;

  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.covidService.getAll()
      .subscribe(locations => {
        console.log(locations);
        this.locations = locations;
      });

   
  }

  showModal(title,code){
    this.code = code;
    this.title = title;
    this.isVisible = true;
  }

  deleteAccount(id: string) {

  }

  
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}

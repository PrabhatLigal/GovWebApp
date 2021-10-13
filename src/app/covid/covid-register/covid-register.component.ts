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
  public elementType: 'img' | 'url' | 'canvas' | 'svg' = null;
  public level: 'L' | 'M' | 'Q' | 'H';
  public scale: number;
  public width: number;

  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.covidService.getAll()
      .subscribe(locations => {
        console.log(locations);
        this.locations = locations;
      });

    this.elementType = 'img';
    this.level = 'M';
    this.code = 'Initial QR code data string';
    this.scale = 1;
    this.width = 256;
  }

  deleteAccount(id: string) {
    // const account = this.accounts.find(x => x.id === id);
    // account.isDeleting = true;
    // this.covidService.delete(id)
    //     .pipe(first())
    //     .subscribe(() => {
    //         this.accounts = this.accounts.filter(x => x.id !== id) 
    //     });
  }

}

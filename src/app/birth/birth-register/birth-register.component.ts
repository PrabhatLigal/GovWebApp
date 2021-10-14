import { Component, OnInit } from '@angular/core';

import { BirthService } from '@app/_services';

@Component({
  selector: 'app-birth-register',
  templateUrl: './birth-register.component.html',
  styleUrls: ['./birth-register.component.less']
})
export class BirthRegisterComponent implements OnInit {


  certificates: any[];

  constructor(private covidService: BirthService) { }

  ngOnInit() {
    this.covidService.getAll()
      .subscribe(certificates => {
        console.log(certificates);
        this.certificates = certificates;
      });

   
  }

}

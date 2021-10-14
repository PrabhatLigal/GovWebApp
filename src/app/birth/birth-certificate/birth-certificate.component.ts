import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { BirthService, AlertService } from '@app/_services';

@Component({
  selector: 'app-birth-certificate',
  templateUrl: './birth-certificate.component.html',
  styleUrls: ['./birth-certificate.component.less']
})
export class BirthCertificateComponent implements OnInit {

  id: string;
  certificate: any;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private birthService: BirthService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.birthService.getAll()
      .subscribe(certificates => {
        // console.log(certificates);
        // this.certificates = certificates;
        this.certificate = certificates.find(x => x._id === this.id);
        console.log(this.certificate);
      });

  }

  public approve() {
    this.loading = true;
    this.birthService.approve(this.id)
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Birth Certificate', { keepAfterRouteChange: true });
            this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }


}

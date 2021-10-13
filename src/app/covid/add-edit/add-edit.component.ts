import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService, CovidService } from '@app/_services';
import { MustMatch } from '@app/_helpers';
import { CovidCheckIn } from '@app/_models';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.less']
})
export class AddEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private covidService: CovidService,
      private alertService: AlertService
  ) {}

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;

      this.form = this.formBuilder.group({
          name: ['', Validators.required],
          address: ['', Validators.required],
          post_code: [0, Validators.required],

      }, {
          // validator: MustMatch('password', 'confirmPassword')
      });

      if (!this.isAddMode) {
          // this.accountService.getById(this.id)
          //     .pipe(first())
          //     .subscribe(x => this.form.patchValue(x));
      }
  }

  get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createAccount();
        } else {
            this.updateAccount();
        }
    }
    private createAccount() {
      const data =this.form.value;
      data.post_code = Number(this.form.value.post_code)
      this.covidService.registerLocation(this.form.value)
      .pipe(first())
      .subscribe({
          next: () => {
              this.alertService.success('Location Regsitered', { keepAfterRouteChange: true });
              this.router.navigate(['../'], { relativeTo: this.route });
          },
          error: error => {
              this.alertService.error(error);
              this.loading = false;
          }
      });
    }

    private updateAccount() {
    
    }

    keyPressNumbersWithDecimal(event) {
      var charCode = (event.which) ? event.which : event.keyCode;
      if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
      }
      return true;
    }
}

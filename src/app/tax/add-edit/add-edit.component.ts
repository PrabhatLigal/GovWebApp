import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService, TaxService } from '@app/_services';
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
  article: any;
  fetching = true;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private taxService: TaxService,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  
    this.form = this.formBuilder.group({
      title: ['', Validators.required,],
      auther: ['', Validators.required,],
      description: ['', Validators.required],
    }, {

    });

    // this.form.disable();

    if (!this.isAddMode) {
      this.taxService.getAll() // need get by id
      .subscribe(article => {
        this.article = article.find(x => x._id === this.id);
        this.form.patchValue({ 
          title: this.article.title, 
          auther: this.article.auther,
          description: this.article.description
        })
        this.fetching = false;
        console.log(this.article);
      });

    }else{
      this.fetching = false;
    }
    // this.form.enable();
    
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
    console.log("Creating")
    this.taxService.create(this.form.value).pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Article posted', { keepAfterRouteChange: true });
            this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }

  private updateAccount() {
    this.taxService.update(this.id, this.form.value).pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Article updated', { keepAfterRouteChange: true });
            this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });
  }


}

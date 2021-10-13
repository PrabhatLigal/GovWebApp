import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidComponent } from './covid.component';
import { CovidRegisterComponent } from './covid-register/covid-register.component'
import { AddEditComponent } from './add-edit/add-edit.component'

// const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);

const routes: Routes = [
    { path: '', component: CovidComponent,
    children: [
        { path: '', component: CovidRegisterComponent },
        { path: 'add', component: AddEditComponent },
        // { path: 'edit/:id', component: AddEditComponent }
    ]
},
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CovidRoutingModule { }
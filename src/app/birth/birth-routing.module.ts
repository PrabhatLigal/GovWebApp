import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthComponent } from './birth.component';
import { BirthRegisterComponent } from './birth-register/birth-register.component';

// const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);

const routes: Routes = [
    { path: '', component: BirthComponent ,
    children: [
        { path: '', component: BirthRegisterComponent },
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BirthRoutingModule { }
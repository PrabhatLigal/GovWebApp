import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
// const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);
const birthModule = () => import('./birth/birth.module').then(x => x.BirthModule);
const covidModule = () => import('./covid/covid.module').then(x => x.CovidModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    // { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'birth', loadChildren: birthModule, canActivate: [AuthGuard] },
    { path: 'covid', loadChildren: covidModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

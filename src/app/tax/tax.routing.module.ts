import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxComponent } from './tax.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AddEditComponent } from './add-edit/add-edit.component'

const routes: Routes = [
    { path: '', component: TaxComponent,
    children: [
        { path: '', component: ArticleListComponent },
        { path: 'add', component: AddEditComponent },
        // { path: 'edit/:id', component: AddEditComponent }
    ]
},
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaxRoutingModule { }
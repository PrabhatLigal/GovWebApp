import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { TaxArticle } from '@app/_models';

const baseUrl = `${environment.apiUrl}/taxService`;

@Injectable({ providedIn: 'root' })
export class TaxService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

    }


    getAll(){
       return  this.http.get<TaxArticle[]>(`${baseUrl}/admin`); 
    }


    create(params) {
        return this.http.post(`${baseUrl}/save`, params);
    }

    update(id, params) {
        return this.http.patch(`${baseUrl}/update/${id}`, params);
    }
}
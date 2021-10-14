import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { BirthCertificate } from '@app/_models';

const baseUrl = `${environment.apiUrl}/birthCertificate`;

@Injectable({ providedIn: 'root' })
export class BirthService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

    }


    getAll(){
       return  this.http.get<BirthCertificate[]>(`${baseUrl}/certificate`); 
    }

    approve(id: string){
        return  this.http.patch(`${baseUrl}/certificate/approve/${id}`,''); 
    }

    disapprove(id: string){
        return  this.http.patch(`${baseUrl}/certificate/disapprove/${id}`,''); 
    }



}
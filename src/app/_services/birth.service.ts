import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { BirthCertificate } from '@app/_models';

const baseUrl = `${environment.apiUrl}/birthService`;

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
    return  this.http.get<BirthCertificate[]>(`${baseUrl}/certificate/${id}/approve`); 
    }

    disapprove(id: string){
        return  this.http.get<BirthCertificate[]>(`${baseUrl}/certificate/${id}/disapprove`); 
    }



}
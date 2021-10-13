import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Account, CovidCheckIn } from '@app/_models';

const baseUrl = `${environment.apiUrl}/covidCheckInService`;

@Injectable({ providedIn: 'root' })
export class CovidService {
    private covidSubject: BehaviorSubject<CovidCheckIn>;
    public covid: Observable<CovidCheckIn>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.covidSubject = new BehaviorSubject<CovidCheckIn>(null);
        this.covid = this.covidSubject.asObservable();
    }


    // getById(id: string) {
    //     return this.http.get<Covid>(`${baseUrl}/${id}`);
    // }
    
    update(id, params) {
        // return this.http.put(`${baseUrl}/${id}`, params)
        //     .pipe(map((account: any) => {
        //         // update the current account if it was updated
        //         if (account.id === this.accountValue.id) {
        //             // publish updated account to subscribers
        //             account = { ...this.accountValue, ...account };
        //             this.accountSubject.next(account);
        //         }
        //         return account;
        //     }));
    }
    
    delete(id: string) {
        // return this.http.delete(`${baseUrl}/${id}`)
        //     .pipe(finalize(() => {
        //         // auto logout if the logged in account was deleted
        //         if (id === this.accountValue.id)
        //             this.logout();
        //     }));
    }

    // getByCheckInHistory(id: string) {
    //     return this.http.get<Covid>(`${baseUrl}/${id}`);
    // }
    

   getAll(){
       return  this.http.get<CovidCheckIn[]>(`${baseUrl}/location`); 
   }

   registerLocation(params) {
    return this.http.post(`${baseUrl}/location`, params);
    }
}
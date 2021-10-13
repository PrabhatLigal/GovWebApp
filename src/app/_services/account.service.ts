import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Account } from '@app/_models';

const baseUrl = `${environment.apiUrl}/userAuthService`;

@Injectable({ providedIn: 'root' })
export class AccountService {
    private accountSubject: BehaviorSubject<Account>;
    public account: Observable<Account>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.accountSubject = new BehaviorSubject<Account>(null);
        this.account = this.accountSubject.asObservable();
    }

    public get accountValue(): Account {
        return  JSON.parse(localStorage.getItem('currentUser'));
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${baseUrl}/login`, { email, password })
            .pipe(map(account => {
                this.accountSubject.next(account);
                localStorage.setItem('currentUser', JSON.stringify(account));
                return account;
            }));
    }

    logout() {
        //this.http.post<any>(`${baseUrl}/revoke-token`, {}).subscribe();
        // this.stopRefreshTokenTimer();
        this.accountSubject.next(null);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/account/login']);
    }

    refresh(){
        this.accountSubject.next(JSON.parse(localStorage.getItem('currentUser')));
    }

    getAll() {
        return this.http.get<Account[]>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Account>(`${baseUrl}/${id}`);
    }
    
    
}
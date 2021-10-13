﻿import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  APP_INITIALIZER } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QrCodeModule } from 'ng-qrcode';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        QrCodeModule
    ],
    declarations: [		
        AppComponent,
        AlertComponent,
        HomeComponent,
    //   CovidComponent,
    //   BirthComponent
   ],
    providers: [
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    bootstrap: [AppComponent]
})
export class AppModule { }
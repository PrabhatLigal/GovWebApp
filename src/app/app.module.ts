import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  APP_INITIALIZER } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QRCodeModule } from 'angular2-qrcode';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
  };
  const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
  
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        QRCodeModule,
        BrowserAnimationsModule,
        ScrollingModule
    ],
    declarations: [			
        AppComponent,
        AlertComponent,
        HomeComponent,

   ],
    providers: [
        // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons },
        // provider used to create fake backend
        fakeBackendProvider
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    bootstrap: [AppComponent]
})
export class AppModule { }
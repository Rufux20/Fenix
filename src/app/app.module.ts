import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PromocionesPage } from '../pages/promociones/promociones';
import { OrdenesPage } from '../pages/ordenes/ordenes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ClientServiceProvider } from '../providers/client-service/client-service';

import * as $ from 'jquery';
import { PromocionServiceProvider } from '../providers/promocion-service/promocion-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PromocionesPage,
    OrdenesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PromocionesPage,
    OrdenesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClientServiceProvider,
    PromocionServiceProvider
  ]
})
export class AppModule {}

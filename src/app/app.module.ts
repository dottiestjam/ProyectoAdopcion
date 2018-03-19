import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdopcionPage } from '../pages/adopcion/adopcion';
import { RescatePage } from '../pages/rescate/rescate';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { BaseDatosProvider } from '../providers/base-datos/base-datos';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdopcionPage,
    RescatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdopcionPage,
    RescatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseDatosProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdopcionPage } from '../pages/adopcion/adopcion';
import { RescatePage } from '../pages/rescate/rescate';
import { AdopcionDetallePage } from '../pages/adopcion-detalle/adopcion-detalle';
import { AdopcionFormularioPage } from '../pages/adopcion-formulario/adopcion-formulario'; 


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { BaseDatosProvider } from '../providers/base-datos/base-datos';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { CallNumber } from '@ionic-native/call-number';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdopcionPage,
    RescatePage,
    AdopcionDetallePage,
    AdopcionFormularioPage
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
    RescatePage,
    AdopcionDetallePage,
    AdopcionFormularioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Toast,
    Camera,
    Base64ToGallery,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseDatosProvider
  ]
})
export class AppModule {}

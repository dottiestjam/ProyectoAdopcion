import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdopcionDetallePage } from './adopcion-detalle';

@NgModule({
  declarations: [
    AdopcionDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(AdopcionDetallePage),
  ],
})
export class AdopcionDetallePageModule {}

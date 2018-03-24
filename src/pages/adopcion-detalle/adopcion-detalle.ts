import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the AdopcionDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adopcion-detalle',
  templateUrl: 'adopcion-detalle.html',
})
export class AdopcionDetallePage {

  adopcion
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private callNumber:CallNumber,
  ) {
    this.adopcion = navParams.data.datos;
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdopcionDetallePage');
  }

  llamada(numero:any){
    this.callNumber.callNumber(numero,true)
    .then(() => console.log('llamada exitosa'))
    .catch(() => console.log('no pudimos llamar'));
  }



}

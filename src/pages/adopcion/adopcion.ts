import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AdopcionFormularioPage } from '../../pages/adopcion-formulario/adopcion-formulario'; 


/**
 * Generated class for the AdopcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adopcion',
  templateUrl: 'adopcion.html',
})
export class AdopcionPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl:ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdopcionPage');
  }

  formulariomodal(){
    let modal = this.modalCtrl.create(AdopcionFormularioPage,{});
    modal.present();
  }

}

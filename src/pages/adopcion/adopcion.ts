import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AdopcionFormularioPage } from '../../pages/adopcion-formulario/adopcion-formulario';
import { AdopcionDetallePage } from '../../pages/adopcion-detalle/adopcion-detalle';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';


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

  adopciones;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private basedatosProvider:BaseDatosProvider,
    public modalCtrl:ModalController
  ) {
    
  }

  ionViewWillEnter(){
    this.cargadatos();
  }

  cargadatos(){
    this.basedatosProvider.recuperadopciones()
    .then(
      lista => {
        this.adopciones = lista
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdopcionPage');
  }

  formulariomodal(){
    let modal = this.modalCtrl.create(AdopcionFormularioPage,{});
    modal.present();
  }

  detallemodal(adopcion){
    let modal = this.modalCtrl.create(AdopcionDetallePage,{datos:adopcion});
    modal.present();
  }

}

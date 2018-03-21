import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
import{FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the AdopcionFormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adopcion-formulario',
  templateUrl: 'adopcion-formulario.html',
})
export class AdopcionFormularioPage {

  private adopcion:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private basedatosProvider:BaseDatosProvider,
    private formBuilder:FormBuilder,
    private toastController:ToastController,
    public viewCtrl:ViewController
  ) {
    this.adopcion = this.formBuilder.group({
      descripcion: ["",Validators.required],
      edad: [""],
      raza: ["",Validators.required],
      sexo:["",Validators.required]
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdopcionFormularioPage');
  }


  enviardatos(){
    this.basedatosProvider.insertarAdopcion(this.adopcion.value)
    .then((data)=>{
      this.avisotoast("Registro insertado");
      console.log(data);
    })
  }

  avisotoast(msg){
    let toastController = this.toastController.create({
      message: msg,
      duration: 4000,
      position: 'top'
    });
    toastController.present();
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

}

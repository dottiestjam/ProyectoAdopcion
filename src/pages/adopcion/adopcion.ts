import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
import{FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  private adopcion:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private basedatosProvider:BaseDatosProvider,
    private formBuilder:FormBuilder,
    private toastController:ToastController
  ) {
    this.adopcion = this.formBuilder.group({
      descripcion: ["",Validators.required],
      edad: [""],
      raza: ["",Validators.required],
      sexo:["",Validators.required]
    })
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdopcionPage');
  }

}

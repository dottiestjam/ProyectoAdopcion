import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
import{FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ModalController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
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
  foto: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private basedatosProvider:BaseDatosProvider,
    private formBuilder:FormBuilder,
    private toastController:ToastController,
    public viewCtrl:ViewController,
    public camera:Camera,
    private base64ToGallery: Base64ToGallery
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
    this.basedatosProvider.insertarAdopcion(this.adopcion.value,this.foto)
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

  fotos(){
    let option:CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true,
      saveToPhotoAlbum: true
    };
    this.camera.getPicture(option).then(
      (ImageData) =>{
        this.foto = 'data:image/jpeg;base64,'+ImageData;
        this.base64ToGallery.base64ToGallery(ImageData,{ prefix: '_img', mediaScanner: true}).then(
          res => {
            console.log('Saved image to gallery ', res);
            this.foto = res;
            },
          err => console.log('Error saving image to gallery ', err)
        );
      },
      (err)=>{

      }
    )
  }

}

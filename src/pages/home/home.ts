import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientServiceProvider } from '../../providers/client-service/client-service';
import { SettingsPage } from '../settings/settings'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  responseData: any;
  clientData = {correo: '', clave: ''};

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    public clientServiceProvider: ClientServiceProvider
  ) {
    //this.loginForm = this.createLoginForm();
  }

  login(){
    this.clientServiceProvider.postData(this.clientData,'login').then((result) => {
      // Se comprueba si la API ha retornado una respuesta satisfactoria, de lo contrario se muestra un mensaje de error.
      if ( result['status'] ) {
        this.presentToast( result['message'] );       
        if(this.responseData = result['dataset']){
          console.log(this.responseData);
          localStorage.setItem('clientData', JSON.stringify(this.responseData));
          this.navCtrl.push(SettingsPage);
        }
      } else {
        this.presentToast( result['exception'] );
      }
    }, (err) => {
      console.error(err);
    });
  }


  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}

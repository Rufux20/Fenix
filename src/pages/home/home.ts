import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientServiceProvider } from '../../providers/client-service/client-service';

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
    this.clientServiceProvider.postData(this.clientData,'login')
  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Funciona la tostada',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}

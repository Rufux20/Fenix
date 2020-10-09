import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ClientServiceProvider } from '../../providers/client-service/client-service';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  clientDetails : any;
  responseData: any;

  clientPostData = {'id_cliente':'','claveactual':'', 'clave1': '', 'clave2': ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public clientServiceProvider: ClientServiceProvider,
    public toastCtrl: ToastController) {
    const data = JSON.parse(localStorage.getItem('clientData'));
    this.clientDetails = data;
  
    this.clientPostData.id_cliente = this.clientDetails.id_cliente;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  changePassword(){
    this.clientServiceProvider.postData(this.clientPostData,'changePassword').then((result) => {
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

//   backToWelcome(){
//     const root = this.app.getRootNav();
//     root.popToRoot();
//  }
  
 
 logout(){
      localStorage.clear();
      //setTimeout(() => this.backToWelcome(), 1000);
 }

}

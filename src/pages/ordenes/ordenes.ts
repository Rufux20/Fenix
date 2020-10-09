import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ClientServiceProvider } from '../../providers/client-service/client-service';

/**
 * Generated class for the OrdenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordenes',
  templateUrl: 'ordenes.html',
})
export class OrdenesPage {
  orden: any[] = [];
  responseData: any;
  orderData = {codigo_seguimiento: '', id_cliente: ''};
  @ViewChild( 'orderDetail' ) orderDetail: ElementRef;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController,
    public clientServiceProvider: ClientServiceProvider) {
    const data = JSON.parse(localStorage.getItem('clientData'));
    this.orderData.id_cliente = data.id_cliente;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdenesPage');
    console.log( this.orderDetail); // ElementRef {nativeElement: div#miElemento.miElemento}
       console.log( this.orderDetail.nativeElement.id ); // "miElemento"
  }
  mostrarOrden(){
    this.clientServiceProvider.postData(this.orderData,'readOrden').then((result) => {
      // Se comprueba si la API ha retornado una respuesta satisfactoria, de lo contrario se muestra un mensaje de error.
      if ( result['status'] ) {
        this.presentToast( result['message'] );       
        if(this.orden = result['dataset']){
          console.log(this.orden);
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

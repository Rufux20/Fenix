import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PromocionesDetailPage } from '../promociones-detail/promociones-detail';
import { PromocionServiceProvider } from '../../providers/promocion-service/promocion-service';

/**
 * Generated class for the PromocionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promociones',
  templateUrl: 'promociones.html',
})
export class PromocionesPage {

  promociones: any[] = [];
  responseData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public promocionServiceProvider: PromocionServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocionesPage');
    this.promocionServiceProvider.getData('readAll')
    .subscribe(
      (data) => {
        this.promociones = data['dataset'];
        console.log(this.promociones)
      },
      (error) => {
        console.error(error);
      }
    )
  }

 detail(promocion){
  this.navCtrl.push(PromocionesDetailPage, {promocion:promocion});
 }

}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromocionesDetailPage } from './promociones-detail';

@NgModule({
  declarations: [
    PromocionesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PromocionesDetailPage),
  ],
})
export class PromocionesDetailPageModule {}

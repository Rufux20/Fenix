import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import $ from 'jquery';

const API_PROMOCION = 'http://localhost/Fenix/core/api/promocion.php?action=';

/*
  Generated class for the PromocionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromocionServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PromocionServiceProvider Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      credentials = JSON.stringify(credentials);
      console.log(credentials);
      $.ajax({
        method: 'POST',
        url: API_PROMOCION + type,
        data: credentials,
        dataType: 'json',
        crossDomain: true,
        cache: false
    })
    .done(function( response ) {
        resolve(response);
    })
    .fail( function( jqXHR ) {
        // Se verifica si la API ha respondido para mostrar la respuesta, de lo contrario se presenta el estado de la petición.
        if ( jqXHR.status == 200 ) {
            console.error( jqXHR.responseText );
        } else {
            console.error( jqXHR.status + ' ' + jqXHR.statusText );
        }
    })
    });
  }
  getData(type) {
    return this.http.get(API_PROMOCION + type);
  }

}

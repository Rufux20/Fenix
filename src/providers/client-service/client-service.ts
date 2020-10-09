import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import $ from 'jquery';

const API_CLIENTE = 'http://localhost/Fenix/core/api/cli.php?action=login';

/*
  Generated class for the ClientServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientServiceProvider {

  constructor(private http: HttpClient) {
    console.log('Hello ClientServiceProvider Provider');
  }
  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache' 
      });
      let options = {
        headers: httpHeaders
      };
      const dataP = JSON.stringify({
        correo: 123,
        clave: 'Hello, world!',
        action: 'login'
      });
      console.log(dataP)
      $.ajax({
        method: "POST",
        url: API_CLIENTE,
        data: dataP,
        dataType: 'json',
        crossDomain: true,
        cache: false
    })
    .done(function( response ) {
        // Se comprueba si la API ha retornado una respuesta satisfactoria, de lo contrario se muestra un mensaje de error.
        if ( response.status ) {
            alert( response.message );
        } else {
            alert( response.exception );
        }
    })
    .fail( function( jqXHR ) {
        // Se verifica si la API ha respondido para mostrar la respuesta, de lo contrario se presenta el estado de la petición.
        if ( jqXHR.status == 200 ) {
            console.log( jqXHR.responseText );
        } else {
            console.log( jqXHR.status + ' ' + jqXHR.statusText );
        }
    })
    });

  }
}

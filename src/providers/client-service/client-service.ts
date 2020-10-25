import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import $ from 'jquery';

const API_CLIENTE = 'http://localhost/Fenix/core/api/cliente.php?action=';

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
      credentials = JSON.stringify(credentials);
      const dataP = JSON.stringify({
        correo: 123,
        clave: 'Hello, world!'
      });
      console.log(credentials);
      $.ajax({
        method: 'POST',
        url: API_CLIENTE + type,
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

  pst(credentials, type){
    credentials = JSON.stringify(credentials);
    
    return this.http.post(API_CLIENTE + type, credentials,
      {responseType: 'text'})
      
  }
  getData(type) {
    return this.http.get(API_CLIENTE + type);
  }
}

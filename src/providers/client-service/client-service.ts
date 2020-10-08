import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_CLIENTE = 'http://localhost/Fenix/core/api/clientes.php?action=';

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
      this.http.post(API_CLIENTE + type, JSON.stringify(credentials), options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }
}

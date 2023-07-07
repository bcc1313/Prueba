import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  public api = "https://www.universal-tutorial.com/api/"
public paises : any;
public token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJicmFuZG9ueXRvYmkxMjNAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiMGNPbGhQX0VXb244alVLNC1HenhEZDFaSWpWcGtfYjE2Z0NwQlpYX1BJQlFtZWNVVG5iTGpYc0VMRDZkQ3duRUxvdyJ9LCJleHAiOjE2ODg4MjY3MDB9.OJHzPI8EuphMN6uZjawSpbImDLD-c6O19lf97XAMDTA";
    public headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'aplication/json' 
    });
  constructor(private http:HttpClient) { 
    this.paises = [];




    
  }

  obtenerPaises(){
    

    this.http.get(this.api + "countries",{headers: this.headers}).subscribe((respuesta:any)=>{
      console.log(respuesta);
      this.paises = respuesta;   
     })

  }


}

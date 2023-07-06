import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  public api = "https://www.universal-tutorial.com/api/"
public paises : any;
public token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzbWFyY29zcmRyaWd1ZXpAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiLW14QktrUXF0YWpxUHplc0xkR1ZTUTFUVUhyME5JaUpJaEJBRFJZUlJsQVFMSVpDanQ2bUJoeEVtblpsalJQYktEYyJ9LCJleHAiOjE2ODg3MTA0OTN9.o_NVZV6JrZbZRKbTBphOBjJYFwjNF8-WnzPk82B5s7U";
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

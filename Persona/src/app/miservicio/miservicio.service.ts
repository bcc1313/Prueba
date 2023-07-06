import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  public api = "https://www.universal-tutorial.com/api/"
public paises : any;
public token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzZXJnaW8ubS5yMjMxMTA4MDcyMkBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJPSW15bHdJb0d5R3FuanpJZnNZZk9VQU5vd3g5RGIza29Gb2FCaVNLVU5NcllMQXpDZ3MzenlkQzBZVFdMOGwydHNVIn0sImV4cCI6MTY4ODYxODg3NX0.cYnigaWbzmeFjF1gYhr_I_UXiigUeEr-U0avCQjnEgg";
    public headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Accept': 'aplication/json' 
    });
  constructor(private http:HttpClient) { 
    this.paises = [];




    
  }

  obtenerPaises(){
    

    this.http.get(this.api + "countries",{headers: this.headers}).subscribe((respuesta:any)=>{
      
      this.paises = respuesta;   
     })

  }


}

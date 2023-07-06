import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MiservicioService } from 'src/app/miservicio/miservicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mi-formulario',
  templateUrl: './mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent {
  /**
   *
   */
  public miForm! : FormGroup;
  public estados : any;
  public municipios : any;
  @ViewChild("paisNacimento")paisNacimento!:ElementRef;
  @ViewChild("provinciaNacimiento")provinciaNacimiento!:ElementRef;
  @ViewChild("borrar")borrar!:ElementRef;
  constructor(private miservicio:MiservicioService, private http:HttpClient, private m:FormBuilder) {
    this.miservicio.obtenerPaises(); 
    this.estados = [];
    this.municipios = [];

  }
  ngOnInit(): void {
  this.miForm = this.createForm();

    
  }
  private createForm(): FormGroup{
    return this.m.group({
      id:[''],
      apPaterno:['',[Validators.required]],
      apMaterno:['',[Validators.required]],
      nombre:['',[Validators.required]],
      sexo:['',[Validators.required]],
      fechaNacimiento:['',[Validators.required]],
      paisNacimento:['', [Validators.required]],
      provinciaNacimiento:['', [Validators.required]],
      localidadNacimiento:['', [Validators.required]],
      peso:['',[Validators.required]],
      altura:['',[Validators.required]],
      grupoSanguineo:['',[Validators.required]],
      nacionalidad:['',[Validators.required]],
      estadoCivil:['',[Validators.required]],
      numLicencia:['',[Validators.required]],
      numPasaporte:['',[Validators.required]],
      email:['',[Validators.required]],
      supervisor:['',[Validators.required]],
    })
  }

  public submitFormulario(){
    if(this.miForm.invalid){
      Object.values(this.miForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })

      return;
    }else{
      this.http.post("http://localhost:8080/api/personas",this.miForm.value).subscribe((respuesta:any)=>{
        console.log(respuesta);
        if(respuesta.msg.includes("correctamente")){
          this.borrar.nativeElement.click();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Persona Guardada',
            showConfirmButton: false,
            timer: 1500
          });
        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No se ha podido guardar la persona',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
    console.log(this.miForm.value);
  }

  public get form(): any{
    return this.miForm.controls;
  }

  get paises(){
    return this.miservicio.paises;
  }

  buscarEstados(){
    const pais = this.paisNacimento.nativeElement.value;
    
    const url = this.miservicio.api + "states/" + pais;
    
    if(pais!=""){
      this.http.get(url,{headers: this.miservicio.headers}).subscribe((respuesta:any)=>{
        
        
       this.estados = respuesta;
       this.municipios = [];
          
       })
    }
   

  }

  buscarLocalidad(){
    const estados = this.provinciaNacimiento.nativeElement.value;
    
    const url = this.miservicio.api + "cities/" + estados;
    if(estados!=""){
      this.http.get(url,{headers: this.miservicio.headers}).subscribe((respuesta:any)=>{
        
        
     this.municipios = respuesta;
     
          
       })
    }

  }

}

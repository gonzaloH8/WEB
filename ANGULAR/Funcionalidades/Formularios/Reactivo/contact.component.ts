import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  formularioContacto: FormGroup
  usuarioActivo: any = {
    nombre: 'Pedro',
    apellido: 'Perez',
    deni: '12345678'
  }

  constructor( private form: FormBuilder){
      this.formularioContacto = this.form.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]], 
        apellido: ['', [Validators.required, Validators.minLength(3)]], 
        dni: [''], 
        email: ['', [Validators.required, Validators.email]]
      });
  }

  ngOnInit(): void {
    this.formularioContacto.get('apellido')?.clearValidators()
    this.formularioContacto.get('apellido')?.updateValueAndValidity()
    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      dni: this.usuarioActivo.dni,
    })
    this.formularioContacto.get('nombre')?.disable()
    this.formularioContacto.get('dni')?.disable()
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
        
  enviar(){
    console.log(this.formularioContacto)
  }
}

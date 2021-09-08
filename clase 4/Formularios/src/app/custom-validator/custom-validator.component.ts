import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validadorTelefono } from './validadorTelefono';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent {
  constructor() { }
  registroForm = new FormGroup({
    'nombre': new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    'apellido': new FormControl('', Validators.required),
    'telefono': new FormControl('', [
      Validators.required,
      validadorTelefono(/^[456]{1}[0-9]{9}$/)
    ])
  });

  onSubmit() {
    console.log(this.registroForm.value);
  }

  get nombre() { return this.registroForm.get('nombre'); }
  get apellido() { return this.registroForm.get('apellido'); }
  get telefono() { return this.registroForm.get('telefono'); }

  /*
  /^[679]{1}[0-9]{8}$/
  El {1} hace referencia a que el primer número debe ser 6,7 o 9. El {8} establece que la cadena no debe exceder ocho digitos y debe estar comprendido entre los número 0 y 9
  */

}

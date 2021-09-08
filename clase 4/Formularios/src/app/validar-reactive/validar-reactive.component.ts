import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validar-reactive',
  templateUrl: './validar-reactive.component.html',
  styleUrls: ['./validar-reactive.component.css']
})
export class ValidarReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registroForm = new FormGroup({
    'nombre': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
    'apellido': new FormControl('',[Validators.required,Validators.maxLength(30)]),
    'email' : new FormControl('',[Validators.required,Validators.email])
  })
  onSubmit(){
    console.log(this.registroForm.value);
  }

}

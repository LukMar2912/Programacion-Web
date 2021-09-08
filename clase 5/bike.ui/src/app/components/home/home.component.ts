import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //creamos un array con los modelos de bicibletas que
  //se podran seleccionar
  models: string[] = [
    'bike mistica 2021',
    'bike Globo Race Series',
    'Magic bike blue',
    'Bike covid-19',
    'Bike Golden',
  ];
  //este mensaje lo utilizaremos para mostrar al user si
  //su formulario pudo o no ser enviado hacia en BackEnd
  validMessage: string = "";


  bikeform: FormGroup;

  constructor() {
    // la mayoria de los formulario tienen mas de un campo , por ende necesitamos manejar múltiples 
    //FormControls , Si queremos chequear la validez de nuestro form seria incomodo recorrer o iterar 
    //sobre un array de FormControls e ir chequeando uno a uno para establecer su validez, Los 
    //FormGrooup Nos vienen a resolver este tipo de problemas envolviendo a una coleccion de FormControls
    this.bikeform = new FormGroup({
      //FormControl : representa un solo campo del formulario , Es la unidad más pequeña dentro de 
      //los formularios Angular , estos encapsulan el valor del campo y su estado, ya sea válido,
      //sucio (cambiado) o si contiene errores  

      //validamos con una expresion regular el nombre de twitter que comienza con un "@" seguido
      //seguido de maximo 15 caracteres alfanumericos  
      name: new FormControl('', [Validators.pattern('@([A-Za-z0-9_]{1,15})'), Validators.required]),  //@AlexDeAssis
      email: new FormControl('', [Validators.email, Validators.required]),
      //validamos el telefono con un a RegExp
      //el formato valido sera el siguiente : +54 0223 1522556589
      phone: new FormControl('', [Validators.required, Validators.pattern('\\+54\\s[0-9]{1,4}\\s15[0-9]{8}')]),
      model: new FormControl([Validators.required]),
      serialNumber: new FormControl([Validators.required, Validators.min(111111), Validators.max(999999)]),
      purchasePrice: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(100000)]),
      //la fecha funciona con barras
      //dejo la regex del date '^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$' este funciona con guiones
      purchaseDate: new FormControl('', Validators.pattern('(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/[0-9]{4}')),
      contact: new FormControl('selecciona', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  //creamos un getter para que nos sea mas comodo acceder a cada uno de los formControls 
  //desde el template (home.component.html)
  get controles() {
    return this.bikeform.controls;
  }


  //si no queremos llevar logica a la vista , lo recomendado es 
  //crear una funcion auxiliar para mostras errores de validacion 
  public getError(controlName: string): string {
    let error = '';
    const control = this.bikeform.get(controlName);
    if (control?.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  //esta funcion sera invocada cuando se intente enviar el formulario al back end
  submitRegistration() {
    if (this.bikeform.valid) {
      this.validMessage = 'Su formulario Se Envio con Exito al Back End';
      this.bikeform.reset();
    } else {
      this.validMessage = 'Su formulario Esta Incompleto , intentalo de nuevo ';
    }


    console.log("todo mi formulario es valido ????" + this.bikeform.valid)

    console.log('Que tiene nuestro objeto Form Control en su interior ??? ');
    console.dir(this.bikeform);

    console.log('this.bikeform.controls');
    console.dir(this.bikeform.controls);

    console.log('get controles():');

    console.dir(this.controles);

  }
}

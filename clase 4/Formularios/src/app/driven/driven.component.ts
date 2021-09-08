import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent implements OnInit {
  formulario : any;
  constructor() { }

  ngOnInit() {
  }

  Registrar(formulario){
    console.log(formulario);
    this.formulario = formulario.value;
  }

}

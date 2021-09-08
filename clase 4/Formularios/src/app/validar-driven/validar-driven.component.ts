import { Component } from '@angular/core';
import { Pelicula } from './pelicula';

@Component({
  selector: 'app-validar-driven',
  templateUrl: './validar-driven.component.html',
  styleUrls: ['./validar-driven.component.css']
})
export class ValidarDrivenComponent{
  generos = ["Accion","Drama","Terror","Aventura","Infantil"];

  modelo = new Pelicula(1,'Dr Strange',this.generos[3],'Scott Derrickson');

  submitted = false;

  constructor() { }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostico(){
    return JSON.stringify(this.modelo);
  }

  nuevaPelicula() {
    this.modelo = new Pelicula(11, '','');
  }
}

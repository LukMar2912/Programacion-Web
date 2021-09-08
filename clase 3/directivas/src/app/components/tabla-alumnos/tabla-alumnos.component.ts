import { Component, OnInit } from '@angular/core';
import { Alumno } from '../entities/alumno';

const ALUMNOS = [
  new Alumno('Jose', 'Martinez', 'Python', '../../assets/images/jose.jpg'),
  new Alumno('Martina', 'Perez', 'Angular', '../../assets/images/martina.jpg'),
  new Alumno('Robert', 'Fernandez', 'Dart', '../../assets/images/robert.jpg'),
  new Alumno('Maria', 'La del valle', 'Dart', '../../assets/images/maria.jpg')
]

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {
  alumnos: Alumno[] = ALUMNOS;
  saludar: boolean = true;
  alumnoSeleccionado: Alumno;
  btnOk = 'btn btn-success';
  btnNo = 'btn btn-danger';

  constructor() { }

  ngOnInit(): void {
  }

  establecerSaludo() {
    if (this.saludar) {
      this.saludar = false;
    } else {
      this.saludar = true;
    }
  }

  verAlumno(alumno: Alumno) {
    console.log('seleccionaste el siguiente alumno al hacer click ');
    console.dir(alumno);
    this.alumnoSeleccionado = alumno;
  }

}

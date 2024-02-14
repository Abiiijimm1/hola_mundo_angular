import { Component } from '@angular/core';

@Component({
  selector: 'app-lenguajes-programacion',
  templateUrl: './lenguajes-programacion.component.html',
  styleUrls: ['./lenguajes-programacion.component.css']
})
export class LenguajesProgramacionComponent {
  titulo:string = "Los mejores Lengujaes de Programació";
  lenguajes: string[] = [
    "Java",
    "Python",
    "C#",
    "C++",
    "Kotlin",
    "Dart",
    "Go",
    "Swift",
    "PHP",
    "JavaScript"
  ]

}

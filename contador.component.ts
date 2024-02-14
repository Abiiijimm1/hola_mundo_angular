# Vamos a elaborar un contador donde ingremos nuestra edad y nos diga si somos mayores de edad o no, del mismo modo una lista desplegable sobre los lenguajes de programación
# Todo esto se va a elaborar con Angular

import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title: string = 'Hola Mundo TESJI';
  subtitulo: string = 'Soy un Componente :)';
  contador: number = 5;
  bandera: boolean = true;


  incrementar():void{
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
}

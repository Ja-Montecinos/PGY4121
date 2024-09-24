import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
asignaturas = [
  {nombre :"Ingles Elemental",codigo:"INI3111",seccion:"001V"},
  {nombre :"Programacion Algoritmos",codigo:"PGY2111",seccion:"003D"},
  {nombre :"Portafolio 2",codigo:"APY1221",seccion:"004D"},
  {nombre :"Calidad de Software",codigo:"CSY4111",seccion:"021D"},
  {nombre :"Matematica Aplicada",codigo:"MAT1100",seccion:"03D"},
  {nombre :"Antropologia",codigo:"ASY2311",seccion:"004V"}
]
  constructor() {
    console.log(this.asignaturas)
    console.table(this.asignaturas)
   }

  ngOnInit() {
  }

}

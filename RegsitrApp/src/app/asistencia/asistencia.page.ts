import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  permitir :boolean=false;
  permitir2 :boolean=false;
  asistencias1 = [
    {nombre :"Ingles Elemental",fecha:"24/03/12",presente:true},
    {nombre :"Ingles Elemental",fecha:"25/03/12",presente:true},
    {nombre :"Ingles Elemental",fecha:"26/03/12",presente:true},
    {nombre :"Ingles Elemental",fecha:"11/04/12",presente:true},
    {nombre :"Ingles Elemental",fecha:"12/04/12",presente:true},
    {nombre :"Ingles Elemental",fecha:"13/04/12",presente:false}
  ]
  asistencias2 = [
    {nombre :"Programacion Algoritmos",fecha:"24/05/12",presente:true},
    {nombre :"Programacion Algoritmos",fecha:"25/05/12",presente:true},
    {nombre :"Programacion Algoritmos",fecha:"26/05/12",presente:true},
    {nombre :"Programacion Algoritmos",fecha:"27/06/12",presente:false},
    {nombre :"Programacion Algoritmos",fecha:"30/06/12",presente:false},
    {nombre :"Programacion Algoritmos",fecha:"31/06/12",presente:false}
  ]
  constructor() { }

  ngOnInit() {
  }
  mostrar()
  {
    this.permitir = !this.permitir;
  }  
  mostrar2()
  {
    this.permitir2 = !this.permitir2;
  }
}

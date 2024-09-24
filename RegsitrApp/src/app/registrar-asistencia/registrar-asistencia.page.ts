import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
})
export class RegistrarAsistenciaPage implements OnInit {
  mostrarImagen: boolean = false;
  constructor() { }

  ngOnInit() {
  }
showImage(){
  this.mostrarImagen = !this.mostrarImagen;
}
}

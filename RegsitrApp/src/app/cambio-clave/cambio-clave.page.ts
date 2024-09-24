import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.page.html',
  styleUrls: ['./cambio-clave.page.scss'],
})
export class CambioClavePage implements OnInit {

  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }
async funcionInformacion(){
  const alerta = await this.alertController.create
  (
    {
    header:"Cambio de clave",
    message:"En esta pagina podras cambiar la contraseña de tu cuenta RegistrApp",
    buttons: ['Entendido']
  }
)
  await alerta.present();
}
}

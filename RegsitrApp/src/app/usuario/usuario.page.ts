import { Component, OnInit } from '@angular/core';
import { RedirectCommand, Router, RouterLink } from '@angular/router'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
usuario : String;
password : string;
  constructor(private router: Router,private alertController: AlertController) {
    this.usuario='';
    this.password='';


   }

  ngOnInit() {
  }

async funcionIngresar()
{
 if ( this.usuario=="Usuario1" && this.password=="MiClav3")
  {
    this.router.navigate(['/inicio'])
  }
  else
  {
    const alerta = await this.alertController.create
    (
      {
      header:"Credenciales Incorrectas",
      message:"Las credenciales ingresadas son incorrectas, porfavor verifique su usuario y contraseñas nuevamente",
      buttons: ['Ok']
    }
  )
    await alerta.present();
  }


}
async funcionRestablecer()
{
  const alerta = await this.alertController.create
  (
    {
    header:"Restablecer Contraseña",
    message:"Hemos enviado un correo con los pasos a seguir para restablecer tu contraseña "+this.usuario,
    buttons: ['Ok']
  }
)
  await alerta.present();
}
}


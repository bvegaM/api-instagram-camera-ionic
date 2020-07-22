import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imagen=null;

  constructor(private alertCtrl:AlertController) {}

  respuesta(src){
    console.log(src)
    this.imagen=src
  }
  async satisfactorio(mensaje){
    const alert = await this.alertCtrl.create({
      header: 'Correcto',
      subHeader: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  handlerMessage='';
  roleMessage='';

  constructor(private alertController: AlertController, 
    private menuController: MenuController,
    private navController: NavController,
    private LoadingCtrl: LoadingController){}
  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  async logout() {
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
    }

  async showLoading() {
    const Loading = await this.LoadingCtrl.create({
      message: 'Buscando Conductores',
     duration: 3000,

    });
  
  Loading.present();
  }
}

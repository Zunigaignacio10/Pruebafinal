import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  handlerMessage='';
  roleMessage='';


  constructor(private alertController: AlertController, 
    private navController: NavController,
    private menuController: MenuController) { }

  ngOnInit() {
   
  }

  mostrarMenu(){
    this.menuController.open('first');

  }
  async logout() {
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
    }

}

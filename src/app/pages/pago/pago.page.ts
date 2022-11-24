import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

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


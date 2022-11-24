import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
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

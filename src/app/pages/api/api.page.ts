import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MenuController} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  users: any;
  
  constructor(private menuController: MenuController,
              private apiService: ApiService,
              private navController: NavController,
              private alertController: AlertController) { }

  ngOnInit() {
    this.apiService.getTopComments().subscribe(resp => {
     console.log('users', resp);
     this.users = resp; 
    })
  }
  mostrarMenu(){
    this.menuController.open('first');

  }
  async logout() {
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
    }

}

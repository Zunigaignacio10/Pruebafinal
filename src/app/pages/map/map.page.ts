import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}



@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  handlerMessage='';
  roleMessage='';
  map= 'null';
  markers: Marker[] = [
    {
      position: {
        lat: -33.511134044216526,
        lng: -70.75249220289827,
      },
      title: 'Duoc Uc'
    },
    {
      position: {
        lat: 4.667945861816406,
        lng: -74.09964752197266,
      },
      title: 'Jardín Botánico'
    },
    {
      position: {
        lat: -33.50336455196439,
        lng: -70.78781152886624,
      },
      title: 'Parque la 93'
    },
    {
      position: {
        lat: 4.6554284,
        lng: -74.1094989,
      },
      title: 'Maloka'
    },
  ];


  constructor(private alertController: AlertController, 
    private navController: NavController,
    private menuController: MenuController) { }

    loadMap() {

      const mapEle: HTMLElement = document.getElementById('map');
      const myLatLng = {lat: -33.511134044216526, lng: -70.75249220289827};
      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 12
      });
    
      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map');
        this.renderMarkers();

      });

  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  
    addMarker(marker : Marker) {
      return new google.maps.Marker({
        position: marker.position,
        map: this.map,
        title: marker.title
      });
    }

  ngOnInit() {
    this.loadMap();
   
  }

  mostrarMenu(){
    this.menuController.open('first');

  }
  async logout() {
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
    }


}

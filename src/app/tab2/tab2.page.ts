import { GoogleMaps, GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  map: GoogleMap;

  constructor() { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
  Environment.setEnv({
    'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
    'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
  });

  const mapOptions: GoogleMapOptions = {
    camera: {
       target: {
         lat: 43.0741904,
         lng: -89.3809802
       },
       zoom: 18,
       tilt: 30
     }
  };

  this.map = GoogleMaps.create('map_canvas', mapOptions);

  const marker: Marker = this.map.addMarkerSync({
    title: 'Ionic',
    icon: 'blue',
    animation: 'DROP',
    position: {
      lat: 43.0741904,
      lng: -89.3809802
    }
  });

  marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    alert('clicked');
  });
}

}

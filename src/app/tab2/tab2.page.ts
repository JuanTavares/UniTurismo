import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps/ngx';
import { Component, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterContentInit {

  map: GoogleMap;
  waypoints = [{
    title: 'TREKKING - PICO DO CORVADO  - UBATUBA - SP',
    position: {
      lat: -23.449067,
      lng: -45.192604
    }
  },
  {
    title: 'TREKKING CANYON DO FUNIL - BOM JARDIM DA SERRA - RS',
    position: {
      lat: -28.339509,
      lng: -49.532249
    }
  },
  {
    title: 'PARAQUEDISMO - BOITUVA - SP',
    position: {
      lat: -23.297028,
      lng: -47.688925
    }
  },
  {
    title: 'RAFTING - JUQUITIBA - SP',
    position: {
      lat: -23.939664,
      lng: -47.096496
    }
  },
  {
    title: 'CICLOTURISMO VALE EUROPEU - TIMBÓ - SC',
    position: {
      lat: -26.813760,
      lng: -49.275016
    }
  },
  {
    title: 'PARAPENTE - RIO DE JANEIRO - RJ',
    position: {
      lat: -22.987828,
      lng: -43.279991
    }
  },
  {
    title: 'MERGULHO EM NAUFRÁGIO - NITERÓI - RJ',
    position: {
      lat: -22.960849,
      lng: -43.060572
    }
  }];

  constructor(private router: Router) { }

  ngAfterContentInit(): void {
    this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -25.939664,
          lng: -46.096496
        },
        zoom: 6,
        tilt: 30
      },
      controls: {
        compass: true,
        myLocation: true,
        myLocationButton: true,
        mapToolbar: true
      },
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.waypoints.forEach(data => {
      const marker: Marker = this.map.addMarkerSync({
        title: data.title,
        icon: 'blue',
        animation: 'DROP',
        position: data.position
      });
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        console.log(marker.getPosition());
        this.router.navigate(['/tabs/tab3', marker.getPosition()]);
      });
    });
  }

  logador(data: any) {
    console.log(data);
  }

}

import { Component, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';

class marker{
  position: any;
  label: any;
  options: any;
  title: any;
}

@Component({
  selector: 'app-user-geolocation',
  templateUrl: './user-geolocation.component.html',
  styleUrls: ['./user-geolocation.component.scss']
})


export class UserGeolocationComponent implements OnInit {

  constructor() { }

  center = {lat: 24, lng: 12};
  zoom = 15;
  display?: google.maps.LatLngLiteral;

  marker: marker = new marker;

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void {
    navigator.geolocation.getCurrentPosition((r)=>{
      this.center = {
        lat: r.coords.latitude,
        lng: r.coords.longitude
      }

      this.marker.position = this.center;
      this.marker.label = {color: 'white', text: "Current position"};
      this.marker.title = "Current position";
      this.marker.options = {animation: google.maps.Animation.DROP};
    })
  }


}

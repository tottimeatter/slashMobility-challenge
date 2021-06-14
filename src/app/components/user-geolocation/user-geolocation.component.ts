import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-user-geolocation',
  templateUrl: './user-geolocation.component.html',
  styleUrls: ['./user-geolocation.component.scss']
})


export class UserGeolocationComponent implements OnInit {

  constructor() { }

  center = {lat: 0, lng: 0};
  zoom = 15;

  map: google.maps.Map
  marker: google.maps.Marker
  infoWindow: google.maps.InfoWindow;

  location_icon = environment.location_icon

  ngOnInit(): void {
    this.getLocation();
  }

  /**
   * Gets location from browser and updates the marker
   */
  getLocation(): void {
    navigator.geolocation.getCurrentPosition((r)=>{
      this.center = {
        lat: r.coords.latitude,
        lng: r.coords.longitude
      }
      this.initMap();
    })

  }
  /**
   * Initialize map and marker
   */
  initMap(){
    // Init map
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: this.center,
        zoom: this.zoom,
      }
    )
    //Init marker
    this.marker = new google.maps.Marker({
      position:this.center,
      map: this.map,
      // label:{color: 'white', text: "Current position"},
      title:"Current position",
      animation: google.maps.Animation.DROP
    })
    //Init infowindow
    this.infoWindow = new google.maps.InfoWindow({
      content: `<div>
                  <span style="font-weight:bold">Latitude</span>
                  <span>${this.center.lat}</span>
                </div>
                <div>
                  <span style="font-weight:bold">Longitude</span>
                  <span>${this.center.lng}</span>
                </div>`
    })

    this.marker.addListener("click", ()=> {
      this.infoWindow.open(this.map, this.marker)
    })
  }


}

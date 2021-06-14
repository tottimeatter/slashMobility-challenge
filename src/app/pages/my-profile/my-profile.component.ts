import { Component, OnInit } from '@angular/core';
import { environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  touch_icon = env.touch_icon;

  ngOnInit(): void {
  }

}

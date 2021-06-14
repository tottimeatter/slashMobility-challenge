import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private dataService: DataService) { }

  touch_icon = env.touch_icon;

  ngOnInit(): void {
  }

  /**
   * Set new user
   * @param e New user
   */
  setUser(e){
    this.dataService.setUser(e).subscribe((response) => {
      console.log(response);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

class user {
  constructor(){}

  userName: string;
  image: string;
  email: string;
  gender: string;
  bio: string
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})


export class UserProfileComponent implements OnInit {

  constructor() { }
  // Logic user object
  userInfo: user = new user;
  // Form controller
  userInfoControl = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    bio: new FormControl()
  });

  ngOnInit(): void {
  }

  /**
   * User info form validation
   */
  validateForm(): void{
    this.userInfo = {
      image: this.userInfo.image,
      userName: this.userInfoControl.value.username,
      email: this.userInfoControl.value.email,
      gender: this.userInfoControl.value.gender,
      bio: this.userInfoControl.value.bio
    }
    console.log(this.userInfo);
  }

  /**
   * Set user image
   * @param e EvenEmiter event
   */
  setUserImage(e){
    console.log(e)
    this.userInfo.image = e;
  }
}

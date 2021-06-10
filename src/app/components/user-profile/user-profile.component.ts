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

  userInfo: user = new user;

  userInfoControl = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    bio: new FormControl()
  });

  ngOnInit(): void {
  }

  validateForm(): void{
    // debugger
    this.userInfo = {
      image: this.userInfo.image,
      userName: this.userInfoControl.value.username,
      email: this.userInfoControl.value.email,
      gender: this.userInfoControl.value.gender,
      bio: this.userInfoControl.value.bio
    }
    console.log(this.userInfo);
  }

  setUserImage(e){
    console.log(e)
    this.userInfo.image = e;
  }
}

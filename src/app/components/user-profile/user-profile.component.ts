import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from 'src/app/model/model'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})


export class UserProfileComponent implements OnInit {

  constructor() { }

  @Output() newUser = new EventEmitter();

  // Logic user object
  userInfo: User = new User;
  // Form controller
  userInfoControl = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl(),
    bio: new FormControl()
  });

  ngOnInit(): void {
  }
  /**
   * User info form submit
   */
  submitForm(): void{
    this.userInfo = {
      image: this.userInfo.image,
      userName: this.userInfoControl.value.username,
      email: this.userInfoControl.value.email,
      gender: this.userInfoControl.value.gender,
      bio: this.userInfoControl.value.bio
    }
    console.log(this.userInfo);
    this.newUser.emit(this.userInfo);
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

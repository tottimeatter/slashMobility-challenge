import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserGeolocationComponent } from './components/user-geolocation/user-geolocation.component';
import { ImgSelectComponent } from './components/img-select/img-select.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatRadioModule} from '@angular/material/radio'
import {MatFormFieldModule} from '@angular/material/form-field/'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    UserProfileComponent,
    UserGeolocationComponent,
    ImgSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

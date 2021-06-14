import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment as env} from 'src/environments/environment'
import { Observable } from 'rxjs';
import { User } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /**
   * Sets a new user to the DB
   * @param user New user
   * @returns Http response
   */
  setUser(user: User): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type','application/json');

    /**For mocking purposes */
    user.id= user.userName;
    /******/
    const newUserJSON = JSON.stringify(user);
    console.log(newUserJSON);

    return this.http.post(`${env.urlAPI}/users`, newUserJSON, {headers: headers})
  }

}

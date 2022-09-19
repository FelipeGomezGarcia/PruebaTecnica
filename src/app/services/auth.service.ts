import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_URL = 'https://api.themoviedb.org/3/authentication/token/new';
const VALIDATE_URL = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';
const API_KEY = 'e79c0ed7a1ecb8f66b5b544fc384c90f';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:any;
  user:any = null;
  constructor(private http:HttpClient) { }

  login(username: string,password:string):Observable<any>{

    this.user = null;

    this.token = this.http.get((`${AUTH_URL}?api_key=${API_KEY}`));
    console.log(JSON.stringify(this.token))
    this.user = {
      "username": username,
      "password": password,
      "request_token":"a7f61ef3842cb3e30a4888d0c4e1e21c154a831d"
    };
    console.log(JSON.stringify(this.user))
    return this.http.post((`${VALIDATE_URL}?api_key=${API_KEY}`), JSON.stringify(this.user));
  }

}

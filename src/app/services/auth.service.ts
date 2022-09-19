import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

const AUTH_URL = 'https://api.themoviedb.org/3/authentication/token/new';
const VALIDATE_URL = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';
const API_KEY = 'e79c0ed7a1ecb8f66b5b544fc384c90f';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any = null;
  constructor(private http:HttpClient) { }

  login(username: string,password:string, token: string):Observable<any>{

    this.user = null;
    this.user = {
      "username": username,
      "password": password,
      "request_token": token
    };
    console.log(JSON.stringify(this.user))

    return this.http.post((`${VALIDATE_URL}?api_key=${API_KEY}`), JSON.stringify(this.user),{ headers: { 'Content-Type': 'application/json'}});
  }

  generatedRequestToken():Observable<any>{
    return this.http.get((`${AUTH_URL}?api_key=${API_KEY}`));
  }

}

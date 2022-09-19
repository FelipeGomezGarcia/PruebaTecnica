import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles:any = null;

  constructor(private authService: AuthService, private tokenStorageService: TokenStorageService) { }



  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void{
    const {username, password} =  this.form;

    this.authService.login(username,password).subscribe(
      data => {
        this.tokenStorageService.saveToken(data["request_token"]);
        this.tokenStorageService.saveUser(username);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err =>{
        this.errorMessage = err.message;
        this.isLoginFailed= true;
      }
    )
  }
  reloadPage() {
    window.location.reload();
  }

}

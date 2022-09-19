import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaTecnica';

  isLoggedIn = false;
  token : any;

  constructor(private tokenStorageService: TokenStorageService, private authService:AuthService){}

  ngOnInit():void{
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    }
    this.generarRequestToken();
  }

  generarRequestToken(){
    this.authService.generatedRequestToken().subscribe(
      data=>{
        this.token = data["request_token"];
      }
    );
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

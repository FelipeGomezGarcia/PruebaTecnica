import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  pelis:any;
  currentPeli: any={};
  currentIndex = -1;
  name = '';
  isLoggedIn = false;
  username?:string;
  poster:any = 'https://image.tmdb.org/t/p/w500';
  constructor(private datosService: PeliculasService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = JSON.stringify(user);
    }
    this.loadList();
  }

  loadList():void{
    this.datosService.getAll().subscribe(
      (results:any) => {
        this.pelis = results.results;
        this.poster += this.pelis.poster_path;
      }
    );

  }

  searchTitle():void{
    this.currentPeli = {};
    this.currentIndex = -1;

    this.pelis=this.datosService.findByName(this.name);
  }
}

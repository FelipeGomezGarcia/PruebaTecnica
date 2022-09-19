import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series:any=null;
  currentSerie:any={};
  currentIndex = -1;
  name = '';
  isLoggedIn = false;
  username?:string;

  constructor(private datosService: SeriesService,private tokenStorageService: TokenStorageService) { }

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
      (results: any) => {this.series = results.results;
      }
    );

  }

  searchName():void{
    this.currentSerie = {};
    this.currentIndex = -1;

    this.series = this.datosService.findByName(this.name);
  }
}

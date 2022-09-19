import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detalles-pelis',
  templateUrl: './detalles-pelis.component.html',
  styleUrls: ['./detalles-pelis.component.css']
})
export class DetallesPelisComponent implements OnInit {

  pelicula : any;
  id: any = [];
  poster:any = 'https://api.themoviedb.org/3/movie/';
  mensaje='';
  constructor(private datosService: PeliculasService, private activeRoute: ActivatedRoute,private router:Router) {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.datosService.get(this.id).subscribe(
      results => {
        this.pelicula = results;
        this.poster += results.id + results.poster_path;
        console.log('poster' +this.poster)
      }
    );
  }

}

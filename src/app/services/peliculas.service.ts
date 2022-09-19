import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'https://api.themoviedb.org/3/movie'
const API_KEY = 'e79c0ed7a1ecb8f66b5b544fc384c90f'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(`${apiUrl}/now_playing?api_key=${API_KEY}`);
  }

  get(id:any):Observable<any>{
    return this.http.get(`${apiUrl}/${id}?api_key=${API_KEY}`);
  }


  findByName(name:any):Observable<any[]>{
    var peliculas;
    var peliculasFiltradas:any = [];
    this.getAll().subscribe(
      (data : any) =>{
        peliculas = data.results;
        for (let index = 0; index < peliculas.length; index++) {
          if (peliculas[index].title.toLowerCase().includes(name)) {
            peliculasFiltradas.push(peliculas[index]);

          }
        }

      }
    )

    return peliculasFiltradas;
  }
}

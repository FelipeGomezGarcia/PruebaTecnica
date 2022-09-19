import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'https://api.themoviedb.org/3/tv'
const API_KEY = 'e79c0ed7a1ecb8f66b5b544fc384c90f'

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(`${apiUrl}/on_the_air?api_key=${API_KEY}`);
  }

  get(id:any):Observable<any>{
    return this.http.get(`${apiUrl}/${id}?api_key=${API_KEY}`);
  }

  findByName(name:any):Observable<any[]>{
    let series;
    let seriesFiltradas:any = [];
    this.getAll().subscribe(
      (data : any) =>{
        series = data.results;
        for (let index = 0; index < series.length; index++) {
          if (series[index].name.toLowerCase().includes(name.toLowerCase())) {
            seriesFiltradas.push(series[index]);

          }
        }

      }
    )

    return seriesFiltradas;
  }
}

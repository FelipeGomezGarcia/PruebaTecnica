import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-detalles-series',
  templateUrl: './detalles-series.component.html',
  styleUrls: ['./detalles-series.component.css']
})
export class DetallesSeriesComponent implements OnInit {

  serie : any;
  id: any = [];
  mensaje='';
  isLoggedIn: boolean =false;
  constructor(private datosService: SeriesService, private activeRoute: ActivatedRoute,private tokenStorageService:TokenStorageService) {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.datosService.get(this.id).subscribe(
      results => {
        this.serie = results;
        console.log(results)
      }
    );
  }

}

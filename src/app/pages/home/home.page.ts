import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  //@Input() : any[];

  datos={
  }
  constructor(private http: HttpClient) { 
    this.hacerSolicitudApi();
   
  }
  
  ngOnInit() {
  }
  hacerSolicitudApi() {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=1'; // Reemplaza con tu URL de la API

    this.http.get(apiUrl).subscribe(
      (data) => {
        // Manejar los datos de la respuesta aquí
        console.log('Datos de la API:', data);
        this.datos=data;
      },
      (error) => {
        console.error('Error al hacer la solicitud:', error);
      }
    );
  }

}

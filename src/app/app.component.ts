import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil',
      url: '/perfil', 
      icon: 'person' 
    },
    { title: 'Mas Recientes',
      url: '/mas-recientes', 
      icon: 'sparkles' },
    { title: 'Favorites', 
      url: '/folder/favorites', 
      icon: 'heart' },
    { title: 'Archivados', url: '/folder/archived', icon: 'archive' },
  ];
  
  usuario={
    nombre:'Miguel Corma',
    email:'miguel68933886@gmail.com',
    favoritos:'historias'
  }

  peliculas={

  }

  constructor(private router: Router) {}

  irperfil(){
    this.router.navigate(['/perfil']);
  }
  ircategorias() {
    this.router.navigate(['/categorias']);
  }
}

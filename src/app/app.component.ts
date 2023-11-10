import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox',
      url: '/folder/inbox', 
      icon: 'mail' 
    },
    { title: 'Outbox',
      url: '/folder/outbox', 
      icon: 'paper-plane' },
    { title: 'Favorites', 
      url: '/folder/favorites', 
      icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) {}

  irperfil(){
    this.router.navigate(['/perfil']);
  }
  ircategorias() {
    this.router.navigate(['/categorias']);
  }
}
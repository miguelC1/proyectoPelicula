import { Component, OnInit } from '@angular/core';
import { DrawerScreen } from 'src/app/Modelos/DrawerScreen';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  
  appPages: DrawerScreen[] = [
    { name: 'Home', icon: 'home', url: '/menu/home' },
    {
      name: 'Help',
      icon: 'people-circle-sharp',
      isAsset: true,
      url: '/menu/help',
    },
    { name: 'Feedback', icon: 'help', url: '/menu/feedback' },
    { name: 'Invite Friend', icon: 'group', url: '/menu/invite-friend' },
    { name: 'Rate the app', icon: 'share', url: undefined },
    { name: 'About Us', icon: 'info', url: undefined },
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasRecientesPageRoutingModule } from './mas-recientes-routing.module';

import { MasRecientesPage } from './mas-recientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasRecientesPageRoutingModule
  ],
  declarations: [MasRecientesPage]
})
export class MasRecientesPageModule {}

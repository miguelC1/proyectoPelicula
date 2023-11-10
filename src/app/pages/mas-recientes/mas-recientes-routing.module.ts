import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasRecientesPage } from './mas-recientes.page';

const routes: Routes = [
  {
    path: '',
    component: MasRecientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasRecientesPageRoutingModule {}

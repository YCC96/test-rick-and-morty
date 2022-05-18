import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then(m => m.ListModule),
      },
      {
        path: 'character-detail',
        loadChildren: () => import('../character-detail/character-detail.module').then(m => m.CharacterDetailModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

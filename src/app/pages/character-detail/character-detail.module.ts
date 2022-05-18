import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail.component';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';

@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule,
  ]
})
export class CharacterDetailModule { }

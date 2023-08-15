import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    CardListComponent,
    GifsCardComponent,
    HomePagesComponent,
    SearchBoxComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePagesComponent,
  ]
})
export class GifsModule { }
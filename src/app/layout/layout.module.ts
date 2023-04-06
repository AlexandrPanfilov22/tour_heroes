import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {HeroesModule} from "../heroes/heroes.module";
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeroesModule,
  ],
  exports: [],
})
export class LayoutModule { }

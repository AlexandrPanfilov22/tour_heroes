import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HeroesComponent,
  ],
})
export class HeroesModule { }

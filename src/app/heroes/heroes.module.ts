import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessageComponent } from './components/message/message.component';
import {HeroesRoutingModule} from "./heroes-routing.module";


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
  ],
    exports: [
        HeroesComponent,
        MessageComponent,
    ],
})
export class HeroesModule { }

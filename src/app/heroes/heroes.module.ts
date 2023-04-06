import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessageComponent } from './components/message/message.component';
import { HeroesRoutingModule } from "./heroes-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HeroFormComponent } from './components/hero-form/hero-form.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    HeroFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    HeroesRoutingModule,
  ],
    exports: [
      HeroesComponent,
      MessageComponent,
      HeroFormComponent,
    ],
})
export class HeroesModule { }

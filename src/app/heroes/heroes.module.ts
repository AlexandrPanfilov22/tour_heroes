import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessageComponent } from './components/message/message.component';
import { HeroesRoutingModule } from "./heroes-routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
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
    ],
})
export class HeroesModule { }

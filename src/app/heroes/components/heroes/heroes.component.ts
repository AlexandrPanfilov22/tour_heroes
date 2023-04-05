import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(
      private _heroService: HeroService,
      private _messageService: MessageService,
      ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this._heroService.getHeroes()
        .subscribe((heroes: Hero[]) => this.heroes = heroes)
  }
}

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

  public add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._heroService.addHero({ name } as Hero)
      .subscribe((hero: Hero) => {
        this.heroes.push(hero);
      });
  }

  public delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h: Hero) => h !== hero);
    this._heroService.deleteHero(hero.id)
      .subscribe();
  }
}

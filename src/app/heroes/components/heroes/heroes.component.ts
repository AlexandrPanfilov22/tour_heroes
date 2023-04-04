import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HEROES } from '../../../mocks/mock-heroes';
import { HeroService } from '../../services/hero.service';

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
      ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  public getHeroes(): void {
    this._heroService.getHeroes()
        .subscribe((heroes: Hero[]) => this.heroes = heroes)
  }
}

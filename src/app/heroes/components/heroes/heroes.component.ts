import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HEROES } from '../../../mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  public heroes: Hero[] = HEROES;
  public selectedHero?: Hero;
  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

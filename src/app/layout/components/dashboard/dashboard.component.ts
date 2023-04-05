import { Component, OnInit } from '@angular/core';
import {Hero} from "../../../heroes/interfaces/hero.interface";
import {HeroService} from "../../../heroes/services/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public heroes: Hero[] = [];
  constructor(
    private _heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this._heroService.getHeroes()
      .subscribe((heroes: Hero[]) => this.heroes = heroes.slice(1, 5));
  }

}

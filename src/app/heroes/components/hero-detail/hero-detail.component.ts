import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from "../../services/hero.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private _route: ActivatedRoute,
    private _heroService: HeroService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._heroService.getHero(id)
      .subscribe( (hero: Hero) => this.hero = hero)
  }

  public goBack(): void {
    this._location.back();
  }

  public save(): void {
    if (this.hero) {
      this._heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Hero} from "../../../heroes/interfaces/hero.interface";
import {HeroService} from "../../../heroes/services/hero.service";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms: Subject<string> = new Subject<string>();

  constructor(private _heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._heroService.searchHeroes(term)),
    );
  }

  public search(term: string): void {
    this.searchTerms.next(term);
  }
}

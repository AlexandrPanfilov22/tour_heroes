import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HEROES } from '../../mocks/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl: string = 'api/heroes';

  constructor(
      private _messageService: MessageService,
      private _http: HttpClient,
      ) {}

  public getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this.heroesUrl);
  }

  public getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h: Hero) => h.id === id)!;
    this._messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

   private log(message: string) {
    this._messageService.add(`HeroService: ${message}`);
  }
}

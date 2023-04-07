import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { HEROES } from '../../mocks/mock-heroes';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl: string = 'api/heroes';
  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
      private _messageService: MessageService,
      private _http: HttpClient,
      ) {}

  public getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap((msg: Hero[]) => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }

  public getHero(id: number): Observable<Hero> {
    const url: string = `${this.heroesUrl}/${id}`;
    return this._http.get<Hero>(url)
      .pipe(
        tap((msg: Hero) => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`)),
      )
  }

  public updateHero(hero: Hero): Observable<any> {
    return this._http.put(this.heroesUrl, hero, this._httpOptions).pipe(
      tap((msg) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  public addHero(hero: Hero): Observable<Hero> {
    return this._http.post<Hero>(this.heroesUrl, hero, this._httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  public deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this._http.delete<Hero>(url, this._httpOptions).pipe(
      tap((msg: Hero) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  public searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this._http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x: Hero[]) => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

   private log(message: string): void {
    this._messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

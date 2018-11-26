import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  // this function is simulating a fetch call to a server for heroes. Here we're
  //just returning the mock data of heroes
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}

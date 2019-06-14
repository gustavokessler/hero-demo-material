import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Array<Hero>> {
    return of(HEROES);
  }

  setHeroes(hero: Hero): void {
    hero.id = HEROES.length + 1;
    HEROES.push(hero);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find((x) => x.id === id));
  }

}


const HEROES: Array<Hero> = [
  {
    id: 1,
    name: "Iron Man",
    forca: 40,
    inteligencia: 100,
    agilidade: 40,
    destreza: 80
  },
  {
    id: 2,
    name: "Capt. América",
    forca: 100,
    inteligencia: 60,
    agilidade: 40,
    destreza: 90
  },
  {
    id: 3,
    name: "One Punch-Man",
    forca: 100,
    inteligencia: 100,
    agilidade: 100,
    destreza: 80
  },
  {
    id: 4,
    name: "Máquina de Combate",
    forca: 70,
    inteligencia: 40,
    agilidade: 50,
    destreza: 80
  }


];

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ChuckyService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://api.chucknorris.io/jokes/categories');
  }

  getJokeFromCategory(category): Observable<any> {
    return this.http
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    //.map(r => r.json();
  }
}


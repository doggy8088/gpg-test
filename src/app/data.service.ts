import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  constructor(private http: Http) {
  }

  load() {
    return this.http.get('/api/articles.json');
  }
}

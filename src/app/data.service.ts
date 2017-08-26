import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) {
    http.get('/api/articles.json').subscribe(res => {
      this.data = res.json();
      console.log(this.data);
    });
  }

  data;
}

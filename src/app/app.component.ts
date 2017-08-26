import {Component} from '@angular/core';
import {environment} from '../environments/environment';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.sitename;

  keyword = 'test';

  constructor(private datasvc: DataService) {
    this.data = datasvc.data;
  }

  doSearch(str: string) {
    this.keyword = str;
  }

  doDeleteArticle(item: any) {
    let i = this.data.indexOf(item);
    this.data.splice(i, 1);
  }

  data;
}

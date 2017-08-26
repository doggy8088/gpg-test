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
  data$;

  constructor(private datasvc: DataService) {
    this.data$ = datasvc.load();
  }

  doSearch(str: string) {
    this.keyword = str;
  }

  doDeleteArticle(item: any) {
    this.datasvc.remove(item.id).subscribe((res) => {
    },
    (err) => {
      console.log(err);
    });
  }
}

import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  doDelete() {
    this.delete.emit(this.item);
  }
}

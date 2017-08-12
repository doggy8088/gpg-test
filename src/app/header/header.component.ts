import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Hello';
  title_link = 'https://blog.miniasp.com/'

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.title = 'The Will Will Web';
    }, 2000);
  }

}

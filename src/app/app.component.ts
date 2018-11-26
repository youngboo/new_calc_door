import { Component, OnInit } from '@angular/core';
import {CheckData} from './model/check-data';

@Component({
  selector: 'app-root',
  template: `
       <h1>{{title}}</h1>
   <nav class="ui list noprint">
     <a routerLink="/dashboard">导航页</a>
     <a routerLink="/check">下料单</a>
     <a routerLink="/flower">门花</a>
   </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
  }

}

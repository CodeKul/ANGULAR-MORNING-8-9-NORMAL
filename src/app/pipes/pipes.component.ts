import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dt: string;
  money: number;
  nm: string;

  fut = new Promise((res, rej) => {
    setTimeout(() => {
      res('Hello');
    }, 1500);
  });

  mobiles = ['BB', 'Android', 'Windows', 'Samsung', 'Diet', 'Apple', 'Moto', 'etc'];
  constructor() {
    this.dt = new Date().toString();
    this.money = 100;
    this.nm = 'codekul';
  }

  ngOnInit() {
  }
}

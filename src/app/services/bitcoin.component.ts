import { BackendService } from './backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin',
  template: `
    <div class="row">
      <div class="col-md-12">
        <ul>
          <li *ngFor="let cur of currencies">{{cur}}</li>
        </ul>      
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <input type="text" #curr/> <input type="button" value="Add" (click)="addCur(curr.value)"/>      
      </div>
    </div>
  `,
  styles: []
  // providers: [BackendService]
})
export class BitcoinComponent {

  currencies: string[];

  constructor(
    private backEnd: BackendService
  ) {
    this.currencies = backEnd.allCurrencies();
  }
  addCur(cur: string) {
    this.backEnd.addCur(cur);
  }
}

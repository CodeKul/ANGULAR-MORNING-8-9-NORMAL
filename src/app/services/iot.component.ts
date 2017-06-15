import { BackendService } from './backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-iot',
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
export class IotComponent {

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

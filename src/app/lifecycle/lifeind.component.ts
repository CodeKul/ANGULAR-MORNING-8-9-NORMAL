import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifeind',
  template: `
    <app-lifecycle [myData]="dt" *ngIf="isOn"></app-lifecycle>
    <input type="button" (click)="onOkay()" value="Okay">
  `,
  styles: []
})
export class LifeindComponent implements OnInit {

  dt: string;
  isOn: boolean;
  constructor() { }

  ngOnInit() {
  }

  onOkay() {
    this.dt = '' + new Date().getMilliseconds();
    this.isOn = !this.isOn;
  }
}

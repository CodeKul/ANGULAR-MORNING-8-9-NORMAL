import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  myName: string;
  border: string;
  label: string;
  twoWay : string;

  constructor() {
    this.myName = 'Android';
    this.border = '1px solid blue';
    this.label = 'none';
  }

  getNm = () => this.myName;

  clicked() {
    this.myName = new Date().toString();
  }
}

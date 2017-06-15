import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pi-view',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
           <input type="text" #myName/> 
           <input type="button" class="btn btn-primary" (click)="myName.value=myName.value.toUpperCase()" value="My"/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div>
           <input type="text" #myNameOther/> 
           <input type="button" class="btn btn-primary" (click)="convertToUppercase()" value="My Other"/>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PiViewComponent implements OnInit {

  @ViewChild('myNameOther') myName: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  convertToUppercase() {
    this.myName.nativeElement.value = this.myName.nativeElement.value.toUpperCase();
  }
}

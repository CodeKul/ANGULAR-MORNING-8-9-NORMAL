import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'pi-content',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Pi Content</h1>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ng-content></ng-content>
        </div>
        <div>
          <input type="button" (click)="callFn()" class="btn btn-primary" value="Content Change">
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PiContentComponent implements OnInit {

  @ContentChild('myContent') myContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  callFn() {
    this.myContent.nativeElement.value = 'It is ';
  }
}

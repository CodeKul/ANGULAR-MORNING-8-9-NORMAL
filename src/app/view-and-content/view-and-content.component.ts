import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-and-content',
  templateUrl: './view-and-content.component.html',
  styleUrls: ['./view-and-content.component.css']
})
export class ViewAndContentComponent implements OnInit {

  @ViewChild('myContent') myContent: ElementRef;
  myData: string;
  constructor() { }

  ngOnInit() {
  }

  callFn() {
    this.myData = this.myContent.nativeElement.value;
  }
}

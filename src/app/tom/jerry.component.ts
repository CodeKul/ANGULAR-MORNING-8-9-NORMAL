import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jerry',
  templateUrl: './jerry.component.html',
  styleUrls: ['./jerry.component.css']
})
export class JerryComponent {

  @Output() captured: EventEmitter<string>;

  constructor() {
    this.captured = new EventEmitter<string>();
  }

  capturedJerry() {
    this.captured.emit(new Date().toString());
  }
}

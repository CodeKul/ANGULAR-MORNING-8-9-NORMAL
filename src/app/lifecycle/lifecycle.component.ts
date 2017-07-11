import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() myData: string;
  constructor() { }

  ngOnChanges() {
    this.l(`ngOnChanges`);
  }
  ngOnInit() {
    this.l(`ngOnInit`);
  }

  ngDoCheck() {
    this.l(`ngDoCheck`);
  }

  ngAfterContentInit() {
    this.l(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
    this.l(`ngAfterContentChecked`);
  }
  ngAfterViewInit() {
    this.l(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    this.l(`ngAfterViewChecked`);
  }
  ngOnDestroy() {
    this.l(`ngOnDestroy`);
  }
  l(msg: string) {
    console.log(msg);
  }
}

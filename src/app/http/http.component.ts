import { JokeService } from './joke.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private jokeService: JokeService
  ) { }

  res: string;

  obj = {
    key1: 'value',
    key2: [
      { inKey1: 'value' }
    ],
    key3: {

    }
  };

  ngOnInit() {

    //Observable.startAsync();

    // this.makeObs().subscribe(num => {
    //   console.log(`${num}`);
    // }, err => {
    //   console.log(`${err}`);
    // }, () => {
    //   console.log(`on Complete `);
    // });

    // Observable.timer(1500, 500).subscribe(tick => {
    //   console.log(`tick is ${tick}`);
    // });

    // Observable.range(0,100000).subscribe(rng => {
    //   console.log(`tick is ${rng}`);
    // });
  }

  makeObs(): Observable<number> {
    return Observable.create(sub => {
      for (let i = 0; i < 1000; i++) {
        sub.next(i);
      }
      sub.complete();
    });
  }

  joke() {
    this.jokeService.randomJoke(res => {
      this.res = res;
    });
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class JokeService {

  randomUrl = 'http://api.icndb.com/jokes/random1http://api.icndb.com/jokes/random';
  constructor(
    private http: Http
  ) { }

  randomJoke(callBack: any) {
    this.http.get(this.randomUrl).subscribe(res => {
      console.log(res.json());

      callBack(res.json());
    }, err => { }, () => { });
  }
}
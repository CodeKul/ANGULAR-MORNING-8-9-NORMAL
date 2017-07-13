import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
  //pure: false
})
export class FilterPipe implements PipeTransform {

  transform(mobs: string[], args?: string): any {

    if (args) {
      let filtered = [];
      console.log("Args is " + args);

      mobs.forEach(el => {
        if (el.charAt(0) === args) {
          filtered.push(el);
        }
      });
      return filtered;
    }
    else return mobs;
  }
}

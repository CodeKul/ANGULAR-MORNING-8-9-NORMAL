import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust'
})
export class CustPipe implements PipeTransform {

  transform(value: string, pos?: number): string {
    let op = '';
    let firstPart = value.substr(0, pos );
    let secPart = value.substr(pos + 1);

    console.log( `First ${firstPart} Second ${secPart}`);
    
    op = firstPart + value.charAt(pos).toUpperCase() + secPart;
    return op;
  }
}

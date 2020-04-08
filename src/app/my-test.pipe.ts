import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTest'
})
export class MyTestPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any{
    const len = value.length;
    if( len > 10){
      return value.slice(0,10) + '...'
    }else{
      return value
    }
  }

}

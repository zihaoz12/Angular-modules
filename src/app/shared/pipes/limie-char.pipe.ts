import { Pipe, PipeTransform } from '@angular/core';

export const defaultValue = {
  limitNum: 30
}

@Pipe({
  name: 'limieChar'
})

export class LimieCharPipe implements PipeTransform {
  

  transform(value: any,  ...args: any[]): any {
    if(value.length > 30){
      return value.slice(0,30) + '...'
    }
    return value
  }

}

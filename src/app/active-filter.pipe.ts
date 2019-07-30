import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeFilter'
})
export class ActiveFilterPipe implements PipeTransform {
  transform(items: any[], keyName: string): any {
   
    return items.filter(item => item[keyName]===true);  

  }

}

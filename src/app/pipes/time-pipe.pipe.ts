import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value: string): string {
    if(+value.split(":")[0] > 12) {
      return ""+(+value.split(":")[0] - 12)+":"+value.split(":")[1]+" PM"
    } else if(+value.split(":")[0] == 12) {
      return ""+value.split(":")[0]+":"+value.split(":")[1]+" PM"
    } else {
      return ""+value.split(":")[0]+":"+value.split(":")[1]+" AM"
    }
  }

}

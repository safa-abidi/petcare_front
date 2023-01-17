import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rankPipe'
})
export class RankPipePipe implements PipeTransform {

  transform(value: number): string {
    switch (value%10){
      case 1:return value+"st";
      case 2:return value+"nd";
      case 3:return value+"rd";
      default: return value+"th";
    }
  }

}

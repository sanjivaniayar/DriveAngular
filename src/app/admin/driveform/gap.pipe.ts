import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gap'
})
export class GapPipe implements PipeTransform {

  transform(value: String, gap: any): any 
  {
    if(gap==0)
    {
      return "No";
    }
    else(gap==1)
    {
      return "Yes";
    }
  }

}

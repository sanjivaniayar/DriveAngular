import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(value: String, position: any): any 
  {
    
    if(position==0)
    {
      return "Full stack Developer";
    }
    else if(position==1)
    {
      return "Ui Developer";
    }
    else if(position==2)
    {
      return "Middleware and Backend";
    }
    else(position==3)
    {
      return "Software Tester";
    }
  }

}

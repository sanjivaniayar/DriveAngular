import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'next'
})
export class NextPipe implements PipeTransform {

  transform(value: String, nextaction: any): any 
  {
    
    if(nextaction==0)
    {
      return "Send Resume";
    }
    else if(nextaction==1)
    {
      return "Aptitude Test";
    }
    else if(nextaction==2)
    {
      return "Assignments";
    }
    else if(nextaction==3)
    {
      return "F2F/HR round";
    }
    else(nextaction==4)
    {
      return "Selection";
    }
  }

}

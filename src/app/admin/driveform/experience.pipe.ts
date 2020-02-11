import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(value: String, exprequired:any): any 
  {
    if(exprequired==0)
    {
      return "Fresher";
    }
    else if(exprequired==1)
    {
      return "0-3 Month";
    }
    else if(exprequired==2)
    {
      return "3-6 Month";
    }
    else if(exprequired==3)
    {
      return "6+ Month";
    }
    else(exprequired==4)
    {
      return "Other";
    }
  }

}

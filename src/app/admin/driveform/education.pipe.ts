import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'education'
})
export class EducationPipe implements PipeTransform {

  transform(value: String, educriteria: any): any 
  {
     
    if(educriteria==0)
    {
      return "BE,Comp/It";
    }
    else if(educriteria==1)
    {
      return "BCA/MCA";
    }
    else(educriteria==2)
    {
      return "Other";
    }
  }

}

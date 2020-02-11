import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joining'
})
export class JoiningPipe implements PipeTransform {

  transform(value: String, joiningcriteria: any): any 
  {
    if(joiningcriteria==0)
    {
      return "No Traning And Direct Joining";
    }
    else(joiningcriteria==1)
    {
      return "3 Month intership and then joining";
    }
  }

}

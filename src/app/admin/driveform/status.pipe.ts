import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: String, currentstatus: any): any 
  {
    
    if(currentstatus==0)
    {
      return "Created";
    }
    else if(currentstatus==1)
    {
      return "Resume Sent";
    }
    else if(currentstatus==2)
    {
      return "Apti Done";
    }
    else if(currentstatus==3)
    {
      return "Assignments Done";
    }
    else if(currentstatus==4)
    {
      return "F2F/HR done";
    }
    else(currentstatus==5)
    {
      return "Completed";
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  constructor(private a:ActivatedRoute,private s:HttpService) { }

  emp:any[];
  i;
  tpobj:any={};

  ngOnInit() {

    this.i=this.a.snapshot.params['id'];
    this.s.viewData().subscribe((e:any)=>
    {
      this.emp=e

      for(let i=0;i<this.emp.length;i++)
      {
        if(this.emp[i].d_id==this.i)
        {
          this.tpobj=this.emp[i];
          break;
        }
      }
    });
  }
  data;
  updatedata()
  {
    this.s.update(this.tpobj).subscribe(e=>this.data=e);
    console.log("data update");
    console.log(this.tpobj);
  }

}

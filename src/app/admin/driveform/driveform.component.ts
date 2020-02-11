import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpService } from './http.service';


@Component({
  selector: 'app-driveform',
  templateUrl: './driveform.component.html',
  styleUrls: ['./driveform.component.css'],

})
export class DriveformComponent implements OnInit {

  userform:FormGroup;

  constructor(private fb:FormBuilder,
      private router:Router,
      private snackbar:MatSnackBar,
      private h:HttpService) { }

  ngOnInit() {

    this.userform=this.fb.group({

      componyname     :this.fb.control('',[Validators.required]),
      resources       :this.fb.control('',[Validators.required]),
      exprequired     :this.fb.control('',[Validators.required]),
      ctc             :this.fb.control('',[Validators.required]),
      joiningcriteria :this.fb.control('',[Validators.required]),
      bond            :this.fb.control('',[Validators.required]),
      position        :this.fb.control('',[Validators.required]),
      follow          :this.fb.control('',[Validators.required]),
      educriteria     :this.fb.control('',[Validators.required]),
      currentstatus   :this.fb.control('',[Validators.required]),
      nextaction      :this.fb.control('',[Validators.required]),
      nextdate        :this.fb.control('',[Validators.required]),
      passoutyear     :this.fb.control('',[Validators.required]),
      gap             :this.fb.control('',[Validators.required]),
      creationdate    :this.fb.control('',[Validators.required]),
      tpoid           :this.fb.control('',[Validators.required]),
      

    })
  }
 
  tpo;
  adddata()
  {
    this.h.register(this.userform.value).subscribe(e=>this.tpo=e);
    alert("data submitted");
    console.log(this.userform.value);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriveformComponent } from './driveform.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewformComponent } from './viewform/viewform.component';
import { EditformComponent } from './editform/editform.component';
import { ExperiencePipe } from './experience.pipe';
import { JoiningPipe } from './joining.pipe';
import { PositionPipe } from './position.pipe';
import { EducationPipe } from './education.pipe';
import { StatusPipe } from './status.pipe';
import { NextPipe } from './next.pipe';
import { GapPipe } from './gap.pipe';


const route:Routes=[
  {
    path:"",
    component:DriveformComponent
  },
  // {
  //   path:"Login",
  //   component:LoginComponent,
  //   pathMatch:'full'
  // },
  {
    path:"viewform",
    component:ViewformComponent,
    
  },
  {
    path:"xyz/:id",
    component:EditformComponent,
    pathMatch:'full'
  },

]


@NgModule({
  declarations: [DriveformComponent, ViewformComponent, EditformComponent, ExperiencePipe, JoiningPipe, PositionPipe, EducationPipe, StatusPipe, NextPipe, GapPipe],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(route),
  ]
})
export class DriveformModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DetailStudentComponent } from './Components/detail-student/detail-student.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Student/add', component:AddStudentComponent},
  {path:'StudentEdit/:MeetingID',component:AddStudentComponent},
  {path:'Student/:MeetingID',component:DetailStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

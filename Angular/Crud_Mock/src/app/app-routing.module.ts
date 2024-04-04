import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailStudentComponent } from './Components/detail-student/detail-student.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';


const routes: Routes = [
  {path:'',component:EmployeeComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'student/:id',component:DetailStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

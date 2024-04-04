import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ApiEmployeeService } from '../../api-employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(private _apiEmployee: ApiEmployeeService,private _router:Router) { }
   employee:any = [];
  ngOnInit() {
    this._apiEmployee.getAll().subscribe((res:any) => {
      this.employee = res;
      console.log(res);
    });
  }

  viewData(id:any){
    this._router.navigate(['/student/'+id]);
  }
}

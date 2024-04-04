import { Component } from '@angular/core';
import { ApiEmployeeService } from '../../api-employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  data = {
    Name:"",
    Image:""
  }
  constructor(private _apiEmp:ApiEmployeeService,private _router:Router){}

  saveData(myForm:any){
    this._apiEmp.insert(myForm).subscribe((res:any)=>{
      this._router.navigate(['']);
    });
  }
}

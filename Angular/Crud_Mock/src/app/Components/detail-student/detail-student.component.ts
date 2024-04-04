import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEmployeeService } from '../../api-employee.service';



@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrl: './detail-student.component.css'
})
export class DetailStudentComponent {
  Student:any;
   constructor(private _apiStudent:ApiEmployeeService,private _router:Router, private _activatedParams:ActivatedRoute){}
   id:any;
   ngOnInit(){
    this.id=this._activatedParams.snapshot.paramMap.get('id');
    this._apiStudent.getByID(this.id).subscribe((res:any)=>{
      this.Student = res;
    })
   }

   Delete(id:any){
    this._apiStudent.Delete(this.id).subscribe((res:any)=>{
      this._router.navigate(['/']);
    })
}

}

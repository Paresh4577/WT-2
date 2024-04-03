import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../../api-student.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrl: './detail-student.component.css'
})
export class DetailStudentComponent {
  Student:any;
   constructor(private _apiStudent:ApiStudentService,private _router:Router, private _activatedParams:ActivatedRoute){}
   MeetingID:any;
   ngOnInit(){
    this.MeetingID=this._activatedParams.snapshot.paramMap.get('MeetingID');
    this._apiStudent.getByID(this.MeetingID).subscribe((res:any)=>{
      this.Student = res;
    })
   }

  Delete(MeetingID:any){
    this._apiStudent.Delete(this.MeetingID).subscribe((res:any)=>{
      this._router.navigate(['/']);
    })
  }
}

import { Component } from '@angular/core';
import { ApiStudentService } from '../../api-student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(private _apiService:ApiStudentService,private _activatedRoute:ActivatedRoute,private _router:Router){}
  id = -1;
  Student:any = {};
  data = {
    MeetingID:'',
    OrganizerName:'',
    ParticipantName:'',
    Date:'',
    Time:''
  }

    save(form:any){
      if(this.id==0){
        this._apiService.insert(form).subscribe((res)=>{
          this.Student = res;
          // this._router.navigate(['']);
        })
      }
      else{ 
        this._apiService.update(this.id,form).subscribe((res)=>{
          this.Student = res;
          this._router.navigate(['']);
        })
      }
    }

    ngOnInit(){
      this.id = Number(this._activatedRoute.snapshot.paramMap.get('MeetingID'));
      if(this.id>0){
        this._apiService.getByID(this.id).subscribe((res:any)=>{
          this.data.MeetingID = res.MeetingID;
          this.data.OrganizerName = res.OrganizerName;
          this.data.ParticipantName = res.ParticipantName;
          this.data.Date = res.Date;
          this.data.Time = res.Time;
        })  
      } 
    }
    

  

  // save(form:any){
  //   this._apiService.insert(form).subscribe((res)=>{
  //     this.Student = res;
  //     // this._router.navigate(['']);
  //   })
  // }

   
}

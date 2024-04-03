import { Component } from '@angular/core';
import { ApiStudentService } from '../../api-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(private _apiStudent:ApiStudentService,private _router:Router){}
    Students:any = [];

    ngOnInit(){
      this._apiStudent.getAll().subscribe((res)=>{
        this.Students = res;
      })
    }

    viewData(MeetingID:any){
      this._router.navigate(['/Student/'+MeetingID]);
    }
}

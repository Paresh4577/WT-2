import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  Faculties:any= [];
   constructor(private _apiFaculty:ApiFacultyService){} 
   ngOnInit(){
     this._apiFaculty.getAllFaculties().subscribe(data=>{
       this.Faculties = data;
     })
   }
}

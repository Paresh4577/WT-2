import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {
  apiUrl = 'http://localhost:5000/Meetings'
  apiUrl1 = 'http://localhost:5000'
  constructor(private _http:HttpClient) { }

  getAll(){
    return this._http.get(this.apiUrl);
  }

  getByID(MeetingID:any){
    return this._http.get(this.apiUrl1+"/"+MeetingID);
  }

  Delete(MeetingID:any){
    return this._http.delete(this.apiUrl1+"/"+MeetingID);
  }
}

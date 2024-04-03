import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {

  constructor(private _http:HttpClient) { }
 apiUrl = 'https://65e1e385a8583365b3178e49.mockapi.io/api/p1/Students';    
  getAllFaculties(){
    return this._http.get(this.apiUrl);
  }
}

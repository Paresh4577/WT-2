import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiEmployeeService {

  constructor(private _http:HttpClient) { }
  apiUrl = "https://65e5518d3070132b3b25d786.mockapi.io/Employee"
  getAll(){
    return this._http.get(this.apiUrl);
  }

  getByID(id:any){
    return this._http.get(this.apiUrl+"/"+id);
  }

  Delete(id:any){
    return this._http.delete(this.apiUrl+"/"+id);
  }

  insert(form:any){
    return this._http.post(this.apiUrl,form);
  }
}



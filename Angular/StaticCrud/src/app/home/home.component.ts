import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  setName="";
  setAge=0;
  setCity="";
  Students = [
    {
      name: 'Rohit',
      age: 25,
      city: 'Bangalore'
    },
    {
      name: 'Sanjay',
      age: 30,
      city: 'Bangalore'
    },
    {
      name: 'Kirit',
      age: 28,
      city: 'Bangalore'
    },
    {
      name: 'Raj',
      age: 21,
      city: 'Bangalore'
    },
  ];
   
  add(){
    this.Students.push({
      name: this.setName,
      age: this.setAge,
      city: this.setCity
    })
  }

  delete(name:String){
        this.Students = this.Students.filter((s)=>{
          return s.name !== name;
        })
  } 

  edit(name:String){
    const Temp = this.Students.find((s)=>{
      return s.name === name;
    })
    if(Temp){
      this.setName = Temp.name;
      this.setAge = Temp.age;
      this.setCity = Temp.city;
    }
  }

  editButton(){
    const edit = {
      name : this.setName,
      age : this.setAge,
      city : this.setCity
    }
    this.Students = this.Students.map((s)=>{
      if(s.name == this.setName){
        return edit;
      }
      else{
        return s;
      }
    })
    
  }

}

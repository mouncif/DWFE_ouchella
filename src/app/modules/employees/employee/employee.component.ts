import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }

  createAndUpdate(CurrentEmployee :Employee){
    if(CurrentEmployee.id !=null){
     this.UpdateEmployee(CurrentEmployee);

    }
    else{
       this.createEmployee(CurrentEmployee);
    }


  }
  createEmployee(emp: Employee){
    this.employeeService.createEmployee(emp).subscribe();

  }


  UpdateEmployee(emp: Employee){
    this.employeeService.UpdateEmployee(emp).subscribe();
    
  }
  clear(){
    this.employeeService.CurrentEmployee ={
      firstName:'',
      lastName:'',
      designation:'',
      contact:null,
      id:null,
      address:''
    }
  }


}

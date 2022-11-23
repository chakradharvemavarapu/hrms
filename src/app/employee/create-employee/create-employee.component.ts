import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { observable } from 'rxjs';
import { EmployeeBean } from 'src/app/Bean/employeeBean';
import { EmployeeService } from 'src/app/service/EmployeeService';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // employee: any;
  // jobs: any = [];
  // departments: any = [];
  // managers: any = [];
  // message: any;
  // EmployeeBean: any;
  // observable: any; 
  // CreateEmployeeComponent: any;
  // employeeBean: any;
  // createEmployeeForm: any;
  constructor(private createEmployeeService: EmployeeService) { }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
//   keyPress(event: any) {
//     let inputChar = String.fromCharCode(event.charCode);
//      {
//       event.preventDefault();
      
//   // employeeBean: EmployeeBean = new EmployeeBean(0, "", "", "", 0, new Date(""), 0, "", 0, 0);
//   this.ngOnInit(); void {
//   }

//   onSubmit(createEmployeeForm = NgForm); {
//     console.log( this.createEmployeeForm.value.employeeId);
//     console.log( this.createEmployeeForm.value.firstName);
//     // this.employeeBean.lastName = this.createEmployeeForm.value.lastName;
//     // this.employeeBean.email = this.createEmployeeForm.value.email;
//     // this.employeeBean.phoneNumber = this.createEmployeeForm.value.phoneNumber;
//     // this.employeeBean.hireDate = this.createEmployeeForm.value.hireDate;
//     // this.employeeBean.salary = this.createEmployeeForm.value.salary;
//     // this.employeeBean.jobId = this.createEmployeeForm.value.jobId;
//     // this.employeeBean.managerId = this.createEmployeeForm.value.managerId;
//     // this.employeeBean.departmentId = this.createEmployeeForm.value.departmentId;
// //     this.createEmployeeService.createEmployee(this.employeeBean).subscribe (
// //       data => {
// //         if (data.status === 200) {
// //           alert("Employees are created successfuly");


// //         }
// //         else {

// //           this.message = data.statusText;
// //         }
// //       },
// //       error => {

// //         this.message = error.message;
// //         console.error(error);
// //       }
// //     );
//    }
//   }
//  }

onSubmit(createEmployeeForm: NgForm){
  console.log(createEmployeeForm.value.firstName);
  console.log(createEmployeeForm.value.lastName);
  console.log(createEmployeeForm.value.email);
  console.log(createEmployeeForm.value.phonenumber);
  console.log(createEmployeeForm.value.hireDate);
  console.log(createEmployeeForm.value.salary);
  console.log(createEmployeeForm.value.jobId);
  console.log(createEmployeeForm.value.managerId);
  console.log(createEmployeeForm.value.departmentId);
}

}
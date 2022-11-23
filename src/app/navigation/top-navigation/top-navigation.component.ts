import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/EmployeeService';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  employees:any;
  message: any;
  searchText:any;
  p:number=1;
  count:number=10;
  constructor(private viewEmployeeService:EmployeeService) { }

  ngOnInit(): void {
    const observable = this.viewEmployeeService.getEmployee();
    observable.subscribe(
      (data: { status: number; result: any; message: any; }) => {
        if (data.status=200){
            this.employees=data.result;
            console.log(data.result);
        }
        else {
          this.message=data.message;
          //console.error(error);
        }
  }

  )
}
}
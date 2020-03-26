import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//  import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Employee } from './employee.model';
@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];

  readonly base = 'http://localhost:3000/employees';

  constructor(private http : HttpClient) { }

  postEmployee(emp: Employee) {
return this.http.post(this.base, emp);
  }

  getEmployeeList(){
    return this.http.get(this.base);
  }
  putEmployee(emp: Employee)
  {
    return this.http.put(this.base + `/${emp._id}`, emp);
  }
  deleteEmployee(_id: string)
  {
    return this.http.delete(this.base + `/${_id}`);
  }
}
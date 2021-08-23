import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmplyeeDashboardRoutingModule } from './emplyee-dashboard-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardEmployeeComponent } from './dashboard-employee/dashboard-employee.component';


@NgModule({
  declarations: [AddEmployeeComponent, EditEmployeeComponent, CreateEmployeeComponent, DashboardEmployeeComponent],
  imports: [
    CommonModule,
    EmplyeeDashboardRoutingModule
  ]
})
export class EmplyeeDashboardModule {
  constructor(){
    console.log("employee dashboard")
  }
}

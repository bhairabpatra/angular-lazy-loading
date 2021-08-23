import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardEmployeeComponent } from './dashboard-employee/dashboard-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';



const routes: Routes = [
  {
    path: '', component: DashboardEmployeeComponent, children: [
      {
        path: 'add-employee', component: AddEmployeeComponent
      },
      {
        path: 'create-employee', component: CreateEmployeeComponent
      },
      {
        path:'EditEmployeeComponent', component:EditEmployeeComponent
      }


    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmplyeeDashboardRoutingModule { }

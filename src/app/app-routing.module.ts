import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { HeaderComponent } from './admin/header/header.component';
import { TaskComponent } from './admin/task/task.component';
import { ProjectComponent } from './admin/project/project.component';
import {EmployeeComponent} from './admin/employee/employee.component'
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HeaderComponent },
  { path: 'task', component: TaskComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-task', component: AddTaskComponent },



  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

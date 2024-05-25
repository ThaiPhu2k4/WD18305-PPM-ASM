import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { FooterComponent } from './admin/footer/footer.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { ProjectComponent } from './admin/project/project.component';
import { TaskComponent } from './admin/task/task.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,
    EmployeeComponent,
    ProjectComponent,
    TaskComponent,
    LoginComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
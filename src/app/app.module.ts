import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesModule } from './modules/employees/employees.module';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    EmployeesModule,
    HttpClientModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

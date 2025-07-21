import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page.component';
import { UsersRoutingModule } from './user-routing.module';
import { UserDetailPageComponent } from './pages/user-detail-page.component';
import { UserContactPageComponent } from './pages/user-contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCreatePageComponent } from './pages/user-create-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [UserPageComponent, UserDetailPageComponent, UserContactPageComponent, UserCreatePageComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class UsersModule { }

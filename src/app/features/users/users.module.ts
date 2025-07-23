import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page.component';
import { UsersRoutingModule } from './user-routing.module';
import { UserDetailPageComponent } from './pages/user-detail-page.component';
import { UserContactPageComponent } from './pages/user-contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCreatePageComponent } from './pages/user-create-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserEditPageComponent } from './pages/user-edit-page.component';
import { UserListComponent } from './components/user-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    UserPageComponent,
    UserDetailPageComponent,
    UserContactPageComponent,
    UserCreatePageComponent,
    UserEditPageComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UsersModule { }

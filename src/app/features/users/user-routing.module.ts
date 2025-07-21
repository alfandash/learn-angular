import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page.component';
import { UserContactPageComponent } from './pages/user-contact-page.component';
import { UserCreatePageComponent } from './pages/user-create-page.component';

const routes: Routes = [
  { path: '', component: UserPageComponent },
  { path: 'create', component: UserCreatePageComponent},
  { path: ':id', component: UserDetailPageComponent },
  { path: ':id/contact', component: UserContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

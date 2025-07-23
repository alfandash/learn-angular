import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from './features/auth/infrastructure/services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'One' } },
  { path: 'about', component: AboutComponent, data: { animation: 'Two' } },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
    data: { animation: 'Three' }
  },
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { ChildComponent } from './components/home/child/child.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'child', component: ChildComponent }],
  },
  {
    path: 'users',
    // component: UsersComponent,
    children: [
      { path: '', component: UsersComponent },
      { path: ':id/:name', component: UserComponent },
    ],
  },
  { path: 'forms', component: FormsComponent },
  { path: 'courses', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

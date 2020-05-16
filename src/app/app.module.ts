import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/home/child/child.component';
import { ColorDirective } from './directives/color.directive';
import { UnlessDirective } from './directives/unless.directive';
import { FormsComponent } from './components/forms/forms.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    ColorDirective,
    UnlessDirective,
    FormsComponent,
    UsersComponent,
    UserComponent,
    LoadingComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  exports: [LoadingComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

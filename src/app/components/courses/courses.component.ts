import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable } from 'rxjs';
import { Course, sortCoursesById } from 'src/app/models/course';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  private beginnerCourses$: Observable<Course[]>;
  private advancedCourses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.reloadCourses();
  }

  reloadCourses() {
    const courses$ = this.coursesService
      .loadAllCoursesFromHardcode() // loadAllCourses();
      .pipe(map((courses) => courses.sort(sortCoursesById)));

    this.beginnerCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'BEGINNER')
      )
    );

    this.advancedCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'ADVANCED')
      )
    );
  }
}

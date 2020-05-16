import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable } from 'rxjs';
import { Course, sortCoursesById } from 'src/app/models/course';
import { map, finalize } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.reloadCourses();
  }

  reloadCourses() {
    const courses$ = this.coursesService
      .loadAllCoursesFromHardcode() // loadAllCourses();
      .pipe(map((courses) => courses.sort(sortCoursesById)));

    const loadCourses$ = this.loadingService.showLoaderUntilCopmleted(courses$);

    this.beginnerCourses$ = loadCourses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'BEGINNER')
      )
    );

    this.advancedCourses$ = loadCourses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'ADVANCED')
      )
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, delay } from 'rxjs/operators';
import { Course } from '../models/course';

// Stateless Observable Service
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses = [
    { id: 2, name: 'two', category: 'BEGINNER' },
    { id: 1, name: 'one', category: 'BEGINNER' },
    { id: 3, name: 'three', category: 'ADVANCED' },
  ];

  constructor(private http: HttpClient) {}

  // each subscribtion will trigger new XHR request if shareReplay not used
  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses').pipe(
      // map((res) => res.payload),
      shareReplay() // fetch once and save in memory for further requests
    );
  }

  loadAllCoursesFromHardcode(): Observable<Course[]> {
    return of(this.courses).pipe(delay(1000));
  }
}

export interface Course {
  id: number;
  name: string;
  category: string;
}

export function sortCoursesById(c1: Course, c2: Course) {
  return c1.id - c2.id;
}

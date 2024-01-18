import { Injectable } from '@angular/core';

// {
//   providedIn: 'root'
// }
@Injectable()
export class CourseService {

  constructor() { }

  getMockData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Course Service TEST~");
      }, 800);
    });
  }
}

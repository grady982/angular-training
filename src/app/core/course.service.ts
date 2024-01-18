import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getMockData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Course Service Work ~");
      }, 800);
    });
  }
}

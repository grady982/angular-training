import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onBtnClick(section: string) {
    // this.router.navigate(['data-binding'], { relativeTo: this.route });
    this.router.navigate(['/course', section]);
  }

}

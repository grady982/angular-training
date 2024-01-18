import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/course.service';

@Component({
  selector: 'app-service-insight',
  templateUrl: './service-insight.component.html',
  styleUrls: ['./service-insight.component.scss'],
  providers: [CourseService]
})
export class ServiceInsightComponent implements OnInit {
  
  mockData: string = '';

  constructor(
    private courseService: CourseService
  ) {}

  async ngOnInit(): Promise<void> {
    this.mockData = await this.courseService.getMockData();

    console.log('mockData', this.mockData);
  }


}

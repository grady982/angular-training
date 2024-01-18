import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/course.service';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  selectedCity: string = '';
  cityList: string[] = [
    '宜蘭縣',
    '花蓮縣',
    '臺東縣',
    '澎湖縣',
    '金門縣',
    '連江縣',
    '臺北市',
    '新北市',
    '桃園市',
    '臺中市',
    '臺南市',
    '高雄市',
    '基隆市',
    '新竹縣',
    '新竹市',
    '苗栗縣',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義縣',
    '嘉義市',
    '屏東縣'
  ];
  result: string = '';
  

  constructor(
    private courseService: CourseService
  ) {}


  ngOnInit(): void {
    
  }

  onSelect(city: string) {
    this.courseService.getForecast(city).subscribe((rsp) => {

      if (rsp.success) {
        this.result = JSON.stringify(rsp.records);
      }
    });
  }
    
}

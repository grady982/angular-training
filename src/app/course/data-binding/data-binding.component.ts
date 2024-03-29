import { Component } from '@angular/core';
import { CourseService } from 'src/app/core/course.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  
  // string interpolation
  title: string = 'data binding';
  isTitle: boolean = true;

  // property binding
  imageUrl: string = '/assets/image/safe.jpg';
  isButtonDisabled: boolean = true;
  isError: boolean = true;

  // event binding
  result: string = '';
  isChecked: boolean = true;

  // two way binding
  isChecked2: boolean = true;

  constructor(
    private courseService: CourseService
  ) {}

  getTitle() {
    return 'data binding';
  }

  onButtonClick() {
    console.log('click!');
  }
  
  onInput(event: any) {
    this.result = event.target.value || '';
  }

}

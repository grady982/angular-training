import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CourseComponent } from './course/course.component';
import { BuiltinDirectiveComponent } from './builtin-directive/builtin-directive.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    CourseComponent,
    BuiltinDirectiveComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule
  ]
})
export class CourseModule { }

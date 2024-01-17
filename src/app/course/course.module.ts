import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CourseComponent } from './course/course.component';
import { BuiltinDirectiveComponent } from './builtin-directive/builtin-directive.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { InsightComponent } from './insight/insight.component';
import { Test1Component } from './insight/test1/test1.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    CourseComponent,
    BuiltinDirectiveComponent,
    Assignment1Component,
    InsightComponent,
    Test1Component,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule
  ]
})
export class CourseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CourseComponent } from './course/course.component';
import { BuiltinDirectiveComponent } from './builtin-directive/builtin-directive.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { ComponentInsightComponent } from './component-insight/component-insight.component';
import { ServiceInsightComponent } from './service-insight/service-insight.component';
import { ChildComponent } from './component-insight/child/child.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    CourseComponent,
    BuiltinDirectiveComponent,
    Assignment1Component,
    ComponentInsightComponent,
    ServiceInsightComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule
  ]
})
export class CourseModule { }

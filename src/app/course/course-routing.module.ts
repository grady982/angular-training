import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CourseComponent } from './course/course.component';
import { BuiltinDirectiveComponent } from './builtin-directive/builtin-directive.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { ServiceInsightComponent } from './service-insight/service-insight.component';
import { ComponentInsightComponent } from './component-insight/component-insight.component';

const routes: Routes = [
  { 
    path: '', 
    component: CourseComponent, 
    children: [
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'builtin-directive', component: BuiltinDirectiveComponent },
      { path: 'assignment1', component: Assignment1Component },
      { path: 'component-insight', component: ComponentInsightComponent },
      { path: 'service-insight', component: ServiceInsightComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }

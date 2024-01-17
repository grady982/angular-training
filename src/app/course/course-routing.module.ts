import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CourseComponent } from './course/course.component';
import { BuiltinDirectiveComponent } from './builtin-directive/builtin-directive.component';
import { Assignment1Component } from './assignment1/assignment1.component';

const routes: Routes = [
  { 
    path: '', 
    component: CourseComponent, 
    children: [
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'builtin-directive', component: BuiltinDirectiveComponent },
      { path: 'assignment1', component: Assignment1Component }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }

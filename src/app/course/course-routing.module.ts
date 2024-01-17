import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CourseComponent } from './course/course.component';
import { BuiltinDirectiveComponent } from './builtin-directive/builtin-directive.component';

const routes: Routes = [
  { 
    path: '', 
    component: CourseComponent, 
    children: [
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'builtin-directive', component: BuiltinDirectiveComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }

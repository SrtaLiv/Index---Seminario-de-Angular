import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';

export const routes = [
    {path: '', component: CourseItemComponent}
];
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
// import { CourseList } from '../course-list';
import { CourseItemComponent } from '../course-item/course-item.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseItemComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  // @Input() coursesDecorator!:CourseList
}

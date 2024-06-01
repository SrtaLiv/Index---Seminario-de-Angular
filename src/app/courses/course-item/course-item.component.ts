import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../../courseinterface';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [CommonModule, CourseListComponent],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss'
})
export class CourseItemComponent {
  courses: Course[] = [
    {
      id: 1,
      name: 'Java',
      photo: `assets/remera1.png`,
      availableUnits: 100
    }, 
    {
      id: 2,
      name: 'Python',
      photo: `assets/remera1.png`,
      availableUnits: 100
    }
  ];
}

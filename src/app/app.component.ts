import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursosComponent } from './courses/cursos-item/cursos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}

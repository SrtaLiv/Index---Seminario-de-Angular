import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Button varieties
 */
@Component({
  selector: 'button-components',
  templateUrl: 'button.components.html',
  styleUrl: 'button.components.css',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
})
export class ButtonComponents {}

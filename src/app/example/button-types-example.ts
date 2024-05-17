import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Button varieties
 */
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrl: 'button-types-example.css',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
})
export class ButtonTypesExample {}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
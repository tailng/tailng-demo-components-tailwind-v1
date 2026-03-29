import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent {}

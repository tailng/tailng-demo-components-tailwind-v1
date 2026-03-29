import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './progress-spinner.component.html',
})
export class ProgressSpinnerComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stepper.component.html',
})
export class StepperComponent {}

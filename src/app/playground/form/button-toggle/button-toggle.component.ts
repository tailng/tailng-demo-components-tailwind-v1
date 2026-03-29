import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button-toggle.component.html',
})
export class ButtonToggleComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './toggle.component.html',
})
export class ToggleComponent {}

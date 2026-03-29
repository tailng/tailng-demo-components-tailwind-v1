import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './separator.component.html',
})
export class SeparatorComponent {}

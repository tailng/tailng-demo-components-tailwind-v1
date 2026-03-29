import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './theme.component.html',
})
export class ThemeComponent {}

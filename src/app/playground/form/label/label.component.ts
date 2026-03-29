import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './label.component.html',
})
export class LabelComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collapsible',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './collapsible.component.html',
})
export class CollapsibleComponent {}

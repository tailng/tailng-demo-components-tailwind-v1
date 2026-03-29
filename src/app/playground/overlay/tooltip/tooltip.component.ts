import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {}

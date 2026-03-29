import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './popover.component.html',
})
export class PopoverComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {}

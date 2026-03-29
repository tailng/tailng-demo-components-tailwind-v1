import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './badge.component.html',
})
export class BadgeComponent {}

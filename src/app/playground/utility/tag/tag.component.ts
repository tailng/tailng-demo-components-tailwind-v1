import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tag.component.html',
})
export class TagComponent {}

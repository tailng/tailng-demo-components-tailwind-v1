import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './empty.component.html',
})
export class EmptyComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chips.component.html',
})
export class ChipsComponent {}

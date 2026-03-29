import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent {}

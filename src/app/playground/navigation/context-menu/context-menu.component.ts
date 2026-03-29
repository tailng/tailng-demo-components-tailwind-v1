import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './context-menu.component.html',
})
export class ContextMenuComponent {}

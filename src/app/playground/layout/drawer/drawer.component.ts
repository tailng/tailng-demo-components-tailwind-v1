import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './drawer.component.html',
})
export class DrawerComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {}

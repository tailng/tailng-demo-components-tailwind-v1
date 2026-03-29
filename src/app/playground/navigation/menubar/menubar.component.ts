import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menubar.component.html',
})
export class MenubarComponent {}

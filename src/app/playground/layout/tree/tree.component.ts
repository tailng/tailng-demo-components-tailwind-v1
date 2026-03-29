import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tree.component.html',
})
export class TreeComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent {}

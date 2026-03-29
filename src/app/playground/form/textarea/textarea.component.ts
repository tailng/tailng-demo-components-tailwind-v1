import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {}

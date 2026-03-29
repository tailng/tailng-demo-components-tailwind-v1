import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './code-block.component.html',
})
export class CodeBlockComponent {}

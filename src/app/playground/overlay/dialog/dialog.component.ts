import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {}

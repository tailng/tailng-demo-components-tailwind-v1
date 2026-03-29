import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './toast.component.html',
})
export class ToastComponent {}

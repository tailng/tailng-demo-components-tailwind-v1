import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listbox',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listbox.component.html',
})
export class ListboxComponent {}

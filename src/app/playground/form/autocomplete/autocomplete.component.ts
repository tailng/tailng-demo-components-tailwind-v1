import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent {}

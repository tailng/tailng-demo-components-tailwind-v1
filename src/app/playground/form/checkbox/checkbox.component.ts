import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TngCheckboxComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [TngCheckboxComponent],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {}

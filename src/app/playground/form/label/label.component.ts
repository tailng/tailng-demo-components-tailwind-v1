import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TngLabelComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-label',
  standalone: true,
  templateUrl: './label.component.html',
  imports: [TngLabelComponent],
})
export class LabelComponent {}

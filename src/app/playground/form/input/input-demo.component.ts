import { Component } from '@angular/core';
import { TngInputComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [TngInputComponent],
  templateUrl: './input-demo.component.html',
})
export class InputDemoComponent {}

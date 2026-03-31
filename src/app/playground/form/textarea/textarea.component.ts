import { Component, signal } from '@angular/core';
import { TngTextareaComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [TngTextareaComponent],
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {

  readonly value = signal('Ship notes in both plain language and changelog format.');

  onValueChange(value: string): void {
    this.value.set(value);
  }

  readonly customerUpdate = signal('Follow-up note with owner, ETA, and mitigation plan.');

  onCustomerUpdateChange(value: string): void {
    this.customerUpdate.set(value);
  }

}
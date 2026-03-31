import { Component, signal } from '@angular/core';
import { TngRadioComponent } from '@tailng-ui/components';
type TailwindBillingPlan = 'starter' | 'pro' | 'enterprise';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [TngRadioComponent],
  templateUrl: './radio.component.html',
})
export class RadioComponent {
  readonly selectedTailwindBillingPlan = signal<TailwindBillingPlan>('pro');

  onTailwindBillingPlanChange(plan: TailwindBillingPlan, checked: boolean): void {
    if (!checked) {
      return;
    }

    this.selectedTailwindBillingPlan.set(plan);
  }
}


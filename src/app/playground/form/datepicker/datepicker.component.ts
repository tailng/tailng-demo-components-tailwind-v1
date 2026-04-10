import { Component, signal } from '@angular/core';
import { TngInputComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [TngInputComponent],
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent {
  readonly componentDatepickerOverviewTailwindValue = signal('2026-04-10');
  readonly componentDatepickerOverviewTailwindRangeStart = signal('2026-04-10');
  readonly componentDatepickerOverviewTailwindRangeEnd = signal('2026-04-21');

  onComponentDatepickerOverviewTailwindValueChange(nextValue: string): void {
    this.componentDatepickerOverviewTailwindValue.set(nextValue);
  }

  onComponentDatepickerOverviewTailwindRangeStartChange(nextValue: string): void {
    this.componentDatepickerOverviewTailwindRangeStart.set(nextValue);
  }

  onComponentDatepickerOverviewTailwindRangeEndChange(nextValue: string): void {
    this.componentDatepickerOverviewTailwindRangeEnd.set(nextValue);
  }
}

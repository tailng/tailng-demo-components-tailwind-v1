import { Component, signal } from '@angular/core';
import { TngInputOtpComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-input-otp',
  imports: [TngInputOtpComponent],
  templateUrl: './input-otp.component.html',
})
export class InputOtpComponent {
  readonly componentInputOtpOverviewTailwindValue = signal('84');
  readonly componentInputOtpOverviewTailwindComplete = signal('');

  onComponentInputOtpOverviewTailwindValueChange(nextValue: string): void {
    this.componentInputOtpOverviewTailwindValue.set(nextValue);
    if (nextValue.length < 6) {
      this.componentInputOtpOverviewTailwindComplete.set('');
    }
  }

  onComponentInputOtpOverviewTailwindComplete(nextValue: string): void {
    this.componentInputOtpOverviewTailwindComplete.set(nextValue);
  }

  readonly componentInputOtpStylingTailwindValue = signal('58');

  onComponentInputOtpStylingTailwindValueChange(nextValue: string): void {
    this.componentInputOtpStylingTailwindValue.set(nextValue);
  }
  
  readonly componentInputOtpExamplesPasscodeTailwindValue = signal('84');
  readonly componentInputOtpExamplesPasscodeTailwindComplete = signal('');

  onComponentInputOtpExamplesPasscodeTailwindValueChange(nextValue: string): void {
    this.componentInputOtpExamplesPasscodeTailwindValue.set(nextValue);
    if (nextValue.length < 6) {
      this.componentInputOtpExamplesPasscodeTailwindComplete.set('');
    }
  }

  onComponentInputOtpExamplesPasscodeTailwindComplete(nextValue: string): void {
    this.componentInputOtpExamplesPasscodeTailwindComplete.set(nextValue);
  }

  readonly componentInputOtpExamplesRecoveryTailwindValue = signal('X9Q');

  onComponentInputOtpExamplesRecoveryTailwindValueChange(nextValue: string): void {
    this.componentInputOtpExamplesRecoveryTailwindValue.set(nextValue);
  }
}
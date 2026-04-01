import { Component, signal } from '@angular/core';
import { TngSwitchComponent } from '@tailng-ui/components';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [TngSwitchComponent],
  templateUrl: './switch.component.html',
})
export class SwitchComponent {
  readonly autoPublish = signal(false);

  readonly requireReview = signal(true);

  readonly releaseEmails = signal(true);   
  readonly freezeWindow = signal(false);
}

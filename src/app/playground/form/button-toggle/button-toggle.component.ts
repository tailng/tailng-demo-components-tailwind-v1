import { Component, signal } from '@angular/core';
import { TngButtonToggleComponent, TngButtonToggleGroupComponent } from '@tailng-ui/components';
import { TngButtonToggleValue } from '@tailng-ui/primitives';

type TailwindFeatureFlag = 'a11y' | 'analytics' | 'signals';
type TailwindReleaseTarget = 'review' | 'ship-now';
type TailwindTextStyleOption = 'bold' | 'italic' | 'underline';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [TngButtonToggleGroupComponent, TngButtonToggleComponent],
  templateUrl: './button-toggle.component.html',
})
export class ButtonToggleComponent {
  
  readonly selectedTailwindFeatures = signal<readonly TailwindFeatureFlag[]>(['a11y', 'signals']);

  onTailwindFeaturesChange(values: readonly (string | number)[]): void {
    this.selectedTailwindFeatures.set(
      values.filter((value): value is TailwindFeatureFlag => value === 'a11y' || value === 'analytics' || value === 'signals'),
    );
  }
  readonly selectedTailwindReleaseTarget = signal<TailwindReleaseTarget>('review');

  onTailwindReleaseTargetChange(value: TngButtonToggleValue | null): void {
    if (value === 'review' || value === 'ship-now') {
      this.selectedTailwindReleaseTarget.set(value);
    }
  }
  readonly selectedTailwindTextStyles = signal<readonly TailwindTextStyleOption[]>(['bold', 'underline']);

  onTailwindTextStylesChange(values: readonly (string | number)[]): void {
    this.selectedTailwindTextStyles.set(
      values.filter((value): value is TailwindTextStyleOption => value === 'bold' || value === 'italic' || value === 'underline'),
    );
  }
}

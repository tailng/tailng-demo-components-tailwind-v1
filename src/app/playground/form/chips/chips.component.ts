import { Component, computed, signal } from '@angular/core';
import { TngChipsComponent } from '@tailng-ui/components';
import { TngChip, TngChipRemove } from '@tailng-ui/primitives';

const COMPONENT_CHIPS_OVERVIEW_TAILWIND_SELECTED_SURFACES = Object.freeze([
  'Registry',
  'CLI',
  'Docs',
]);

const COMPONENT_CHIPS_EXAMPLES_TAILWIND_RELEASE_LANES = Object.freeze([
  'Stable',
  'Preview',
  'Canary',
]);

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [TngChipsComponent, TngChip, TngChipRemove],
  templateUrl: './chips.component.html',
})
export class ChipsComponent {
  readonly componentChipsOverviewTailwindSelectedSurfaces = signal<readonly string[]>(
    COMPONENT_CHIPS_OVERVIEW_TAILWIND_SELECTED_SURFACES,
  );
  readonly componentChipsOverviewTailwindSummary = computed(() => {
    const values = this.componentChipsOverviewTailwindSelectedSurfaces();
    return values.length > 0 ? values.join(', ') : 'none';
  });

  onComponentChipsOverviewTailwindValuesChange(nextValues: readonly unknown[]): void {
    this.componentChipsOverviewTailwindSelectedSurfaces.set(
      nextValues.filter((value): value is string => typeof value === 'string'),
    );
  }

  readonly componentChipsExamplesTailwindReleaseLanes = signal<readonly string[]>(
    COMPONENT_CHIPS_EXAMPLES_TAILWIND_RELEASE_LANES,
  );
  readonly componentChipsExamplesTailwindReleaseLaneSummary = computed(() => {
    const values = this.componentChipsExamplesTailwindReleaseLanes();
    return values.length > 0 ? values.join(', ') : 'none';
  });

  onComponentChipsExamplesTailwindReleaseLanesChange(nextValues: readonly unknown[]): void {
    this.componentChipsExamplesTailwindReleaseLanes.set(
      nextValues.filter((value): value is string => typeof value === 'string'),
    );
  }

  isComponentChipsExamplesTailwindReleaseLaneLocked(lane: string): boolean {
    return lane === 'Canary';
  }
}

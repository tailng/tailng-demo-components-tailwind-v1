import { Component, computed, signal } from '@angular/core';
import { TngMultiAutocompleteComponent } from '@tailng-ui/components';

interface ComponentOverviewTailwindLaunchMarketOption {
  readonly code: string;
  readonly label: string;
  readonly region: string;
}

const COMPONENT_OVERVIEW_TAILWIND_LAUNCH_MARKET_OPTIONS: readonly ComponentOverviewTailwindLaunchMarketOption[] = Object.freeze([
  { code: 'ca', label: 'Canada', region: 'North America' },
  { code: 'de', label: 'Germany', region: 'Europe' },
  { code: 'id', label: 'Indonesia', region: 'Asia Pacific' },
  { code: 'in', label: 'India', region: 'Asia Pacific' },
  { code: 'jp', label: 'Japan', region: 'Asia Pacific' },
  { code: 'mx', label: 'Mexico', region: 'North America' },
  { code: 'es', label: 'Spain', region: 'Europe' },
]);

interface ComponentStylingTailwindReleaseOwnerOption {
  readonly id: string;
  readonly name: string;
  readonly team: string;
  readonly disabled?: boolean;
}

const COMPONENT_STYLING_TAILWIND_RELEASE_OWNER_OPTIONS: readonly ComponentStylingTailwindReleaseOwnerOption[] = Object.freeze([
  { id: 'abigail', name: 'Abigail Chen', team: 'Design systems' },
  { id: 'mina', name: 'Mina Lee', team: 'Core UI' },
  { id: 'omar', name: 'Omar Aziz', team: 'Compliance', disabled: true },
  { id: 'sanjay', name: 'Sanjay Patel', team: 'Documentation' },
]);

@Component({
  selector: 'app-multi-autocomplete',
  standalone: true,
  imports: [TngMultiAutocompleteComponent],
  templateUrl: './multi-autocomplete.component.html',
})
export class MultiAutocompleteComponent {
  readonly componentOverviewTailwindLaunchMarkets = COMPONENT_OVERVIEW_TAILWIND_LAUNCH_MARKET_OPTIONS;
  readonly componentOverviewTailwindSelectedMarketCodes = signal<readonly string[]>(['ca', 'es']);
  readonly componentOverviewTailwindSelectedMarketSummary = computed(() => {
    if (this.componentOverviewTailwindSelectedMarketCodes().length === 0) {
      return 'none';
    }

    return this.componentOverviewTailwindSelectedMarketCodes()
      .map((code) => this.componentOverviewTailwindLaunchMarkets.find((market) => market.code === code)?.label ?? code)
      .join(', ');
  });
  readonly getComponentOverviewTailwindMarketValue = (market: ComponentOverviewTailwindLaunchMarketOption) => market.code;
  readonly getComponentOverviewTailwindMarketLabel = (market: ComponentOverviewTailwindLaunchMarketOption) => market.label;

  onComponentOverviewTailwindSelectedMarketsChange(value: unknown): void {
    this.componentOverviewTailwindSelectedMarketCodes.set(this.toComponentOverviewTailwindValueArray(value));
  }

  private toComponentOverviewTailwindValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value
      .map((item) => (typeof item === 'string' ? item : String(item)))
      .filter((item) => item.length > 0);
  }

  readonly componentStylingTailwindReleaseOwners = COMPONENT_STYLING_TAILWIND_RELEASE_OWNER_OPTIONS;
  readonly componentStylingTailwindSelectedOwnerIds = signal<readonly string[]>(['abigail']);
  readonly componentStylingTailwindSelectedOwnerSummary = computed(() => {
    if (this.componentStylingTailwindSelectedOwnerIds().length === 0) {
      return 'none';
    }

    return this.componentStylingTailwindSelectedOwnerIds()
      .map((id) => this.componentStylingTailwindReleaseOwners.find((owner) => owner.id === id)?.name ?? id)
      .join(', ');
  });
  readonly getComponentStylingTailwindOwnerValue = (owner: ComponentStylingTailwindReleaseOwnerOption) => owner.id;
  readonly getComponentStylingTailwindOwnerLabel = (owner: ComponentStylingTailwindReleaseOwnerOption) => owner.name;
  readonly isComponentStylingTailwindOwnerDisabled = (owner: ComponentStylingTailwindReleaseOwnerOption) => owner.disabled === true;

  onComponentStylingTailwindSelectedOwnersChange(value: unknown): void {
    this.componentStylingTailwindSelectedOwnerIds.set(this.toComponentStylingTailwindValueArray(value));
  }

  private toComponentStylingTailwindValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value
      .map((item) => (typeof item === 'string' ? item : String(item)))
      .filter((item) => item.length > 0);
  }
}

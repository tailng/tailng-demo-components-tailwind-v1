import { Component, computed, signal } from '@angular/core';
import { TngSelectComponent } from '@tailng-ui/components';

interface ComponentSelectboxOverviewTailwindWorkflowStageOption {
  readonly value: string;
  readonly label: string;
  readonly note: string;
  readonly disabled?: boolean;
}

const COMPONENT_SELECTBOX_OVERVIEW_TAILWIND_WORKFLOW_STAGE_OPTIONS: readonly ComponentSelectboxOverviewTailwindWorkflowStageOption[] = Object.freeze([
  { value: 'draft', label: 'Draft', note: 'Internal drafting only.' },
  { value: 'review', label: 'In review', note: 'Waiting on editorial review.' },
  { value: 'qa', label: 'QA ready', note: 'Approved for validation.' },
  { value: 'live', label: 'Live', note: 'Already published.', disabled: true },
]);

interface ComponentSelectboxExamplesTailwindReleaseOwnerOption {
  readonly id: string;
  readonly name: string;
  readonly team: string;
  readonly timezone: string;
  readonly disabled?: boolean;
}

const COMPONENT_SELECTBOX_EXAMPLES_TAILWIND_RELEASE_OWNER_OPTIONS: readonly ComponentSelectboxExamplesTailwindReleaseOwnerOption[] = Object.freeze([
  { id: 'abigail', name: 'Abigail Chen', team: 'Design systems', timezone: 'UTC-8' },
  { id: 'mina', name: 'Mina Lee', team: 'Core UI', timezone: 'UTC-5' },
  { id: 'omar', name: 'Omar Aziz', team: 'Compliance', timezone: 'UTC+1', disabled: true },
  { id: 'sanjay', name: 'Sanjay Patel', team: 'Documentation', timezone: 'UTC+5:30' },
]);

@Component({
  selector: 'app-select',
  imports: [TngSelectComponent],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  readonly componentSelectboxOverviewTailwindWorkflowStages = COMPONENT_SELECTBOX_OVERVIEW_TAILWIND_WORKFLOW_STAGE_OPTIONS;
  readonly componentSelectboxOverviewTailwindSelectedStage = signal<string | null>('qa');
  readonly componentSelectboxOverviewTailwindSelectedStageSummary = computed(() => {
    const selectedValue = this.componentSelectboxOverviewTailwindSelectedStage();
    if (selectedValue === null) {
      return 'none';
    }

    return this.componentSelectboxOverviewTailwindWorkflowStages.find((stage) => stage.value === selectedValue)?.label ?? 'none';
  });
  readonly getComponentSelectboxOverviewTailwindWorkflowStageValue = (stage: ComponentSelectboxOverviewTailwindWorkflowStageOption) => stage.value;
  readonly getComponentSelectboxOverviewTailwindWorkflowStageLabel = (stage: ComponentSelectboxOverviewTailwindWorkflowStageOption) => stage.label;
  readonly isComponentSelectboxOverviewTailwindWorkflowStageDisabled = (stage: ComponentSelectboxOverviewTailwindWorkflowStageOption) => stage.disabled === true;

  onComponentSelectboxOverviewTailwindSelectedStageChange(value: unknown): void {
    this.componentSelectboxOverviewTailwindSelectedStage.set(this.toComponentSelectboxOverviewTailwindSingleValue(value));
  }

  private toComponentSelectboxOverviewTailwindSingleValue(value: unknown): string | null {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const first = value[0];
      return typeof first === 'string' ? first : null;
    }

    return null;
  }

  readonly componentSelectboxExamplesTailwindReleaseOwners = COMPONENT_SELECTBOX_EXAMPLES_TAILWIND_RELEASE_OWNER_OPTIONS;
  readonly componentSelectboxExamplesTailwindSelectedOwnerId = signal<string | null>('abigail');
  readonly componentSelectboxExamplesTailwindSelectedOwnerSummary = computed(() => {
    const selectedValue = this.componentSelectboxExamplesTailwindSelectedOwnerId();
    if (selectedValue === null) {
      return 'none';
    }

    return this.componentSelectboxExamplesTailwindReleaseOwners.find((owner) => owner.id === selectedValue)?.name ?? 'none';
  });
  readonly getComponentSelectboxExamplesTailwindOwnerValue = (owner: ComponentSelectboxExamplesTailwindReleaseOwnerOption) => owner.id;
  readonly getComponentSelectboxExamplesTailwindOwnerLabel = (owner: ComponentSelectboxExamplesTailwindReleaseOwnerOption) => owner.name;
  readonly isComponentSelectboxExamplesTailwindOwnerDisabled = (owner: ComponentSelectboxExamplesTailwindReleaseOwnerOption) => owner.disabled === true;

  onComponentSelectboxExamplesTailwindSelectedOwnerChange(value: unknown): void {
    this.componentSelectboxExamplesTailwindSelectedOwnerId.set(this.toComponentSelectboxExamplesTailwindSingleValue(value));
  }

  private toComponentSelectboxExamplesTailwindSingleValue(value: unknown): string | null {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const first = value[0];
      return typeof first === 'string' ? first : null;
    }

    return null;
  }
}

import { Component, signal } from '@angular/core';
import { TngMenuComponent, TngMenubarComponent } from '@tailng-ui/components';
import { TngMenuItem, TngMenubarGroup, TngMenubarItem, type TngMenuSelectEvent } from '@tailng-ui/primitives';

@Component({
  selector: 'app-menu',
  imports: [TngMenuComponent, TngMenubarComponent, TngMenuItem, TngMenubarGroup, TngMenubarItem],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  protected readonly menubarOverviewTailwindLastCommand = signal('No command yet');

  protected onMenubarOverviewTailwindCommandSelect(event: TngMenuSelectEvent): void {
    this.menubarOverviewTailwindLastCommand.set(String(event.value));
  }

  protected onMenubarOverviewTailwindLeafSelect(command: string): void {
    this.menubarOverviewTailwindLastCommand.set(command);
  }
 
  readonly menubarExamplesWorkspaceTwLastCommand = signal('No command yet');

  onMenubarExamplesWorkspaceTwMenuSelect(event: TngMenuSelectEvent): void {
    this.menubarExamplesWorkspaceTwLastCommand.set(String(event.value));
  }
  readonly menubarExamplesCascadeTwLastCommand = signal('No command yet');

  onMenubarExamplesCascadeTwMenuSelect(event: TngMenuSelectEvent): void {
    this.menubarExamplesCascadeTwLastCommand.set(String(event.value));
  }

  readonly menubarExamplesContractTailwindLastCommand = signal('No command yet');

  onMenubarExamplesContractTailwindMenuSelect(event: TngMenuSelectEvent): void {
    this.menubarExamplesContractTailwindLastCommand.set(String(event.value));
  }
}
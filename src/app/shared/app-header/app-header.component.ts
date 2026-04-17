import { Component, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TngBreadcrumbComponent, TngBreadcrumbItemComponent } from '@tailng-ui/components';
import {
  applyTailngTheme,
  atlasDarkThemePreset,
  atlasThemePreset,
  defaultDarkThemePreset,
  defaultThemePreset,
  minimalDarkThemePreset,
  minimalThemePreset,
  nexusDarkThemePreset,
  nexusThemePreset,
  prismDarkThemePreset,
  prismThemePreset,
  slateDarkThemePreset,
  slateThemePreset,
  sterlingDarkThemePreset,
  sterlingThemePreset,
  ThemeDefinition,
} from '@tailng-ui/theme';
import { Subscription, filter } from 'rxjs';

type ThemeMode = 'light' | 'dark';
type ThemeFamily = 'default' | 'minimal' | 'slate' | 'nexus' | 'prism' | 'atlas' | 'sterling';

const THEME_FAMILIES: readonly ThemeFamily[] = [
  'default',
  'minimal',
  'slate',
  'nexus',
  'prism',
  'atlas',
  'sterling',
];

const THEME_PRESETS: Readonly<Record<ThemeFamily, Readonly<Record<ThemeMode, ThemeDefinition>>>> = {
  default: { light: defaultThemePreset, dark: defaultDarkThemePreset },
  minimal: { light: minimalThemePreset, dark: minimalDarkThemePreset },
  slate: { light: slateThemePreset, dark: slateDarkThemePreset },
  nexus: { light: nexusThemePreset, dark: nexusDarkThemePreset },
  prism: { light: prismThemePreset, dark: prismDarkThemePreset },
  atlas: { light: atlasThemePreset, dark: atlasDarkThemePreset },
  sterling: { light: sterlingThemePreset, dark: sterlingDarkThemePreset },
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TngBreadcrumbComponent, TngBreadcrumbItemComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css',
})
export class AppHeaderComponent implements OnDestroy {
  protected readonly breadcrumbLabel = signal<string | null>(null);
  protected readonly themeFamilies = THEME_FAMILIES;
  protected readonly selectedThemeMode = signal<ThemeMode>('light');
  protected readonly selectedThemeFamily = signal<ThemeFamily>('default');

  private readonly breadcrumbRoutesSub?: Subscription;

  constructor(private readonly router: Router) {
    this.updateBreadcrumbFromUrl(this.router.url);
    this.applySelectedTheme();

    this.breadcrumbRoutesSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateBreadcrumbFromUrl(this.router.url));
  }

  ngOnDestroy(): void {
    this.breadcrumbRoutesSub?.unsubscribe();
  }

  private updateBreadcrumbFromUrl(url: string): void {
    const cleaned = url.split('?')[0].split('#')[0];
    const segments = cleaned.replace(/^\/+/, '').split('/').filter(Boolean);
    const primary = segments[0] ?? 'home';

    if (primary === 'home' || primary === '') {
      this.breadcrumbLabel.set(null);
      return;
    }

    this.breadcrumbLabel.set(this.slugToTitle(primary));
  }

  private slugToTitle(slug: string): string {
    const overrides: Record<string, string> = {
      'charts-country-metrics': 'Charts',
      'code-block': 'Code Block',
      'dropdown-menu': 'Dropdown Menu',
      'progress-bar': 'Progress Bar',
      'progress-spinner': 'Progress Spinner',
      'input-otp': 'Input OTP',
      'form-field': 'Form Field',
      icons: 'Icon',
      listbox: 'ListBox',
      'context-menu': 'Context Menu',
      menubar: 'Menubar',
      'navigation-menu': 'Navigation Menu',
      'toggle-group': 'Toggle Group',
      'button-toggle': 'Button Toggle',
      'multi-autocomplete': 'Multi Autocomplete',
      multiselect: 'Multiselect',
      'bottom-sheet': 'Bottom Sheet',
    };

    const overridden = overrides[slug];
    if (overridden) {
      return overridden;
    }

    return slug
      .split('-')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  protected onThemeModeChange(mode: string): void {
    if (!isThemeMode(mode)) {
      return;
    }

    this.selectedThemeMode.set(mode);
    this.applySelectedTheme();
  }

  protected onThemeFamilyChange(family: string): void {
    if (!isThemeFamily(family)) {
      return;
    }

    this.selectedThemeFamily.set(family);
    this.applySelectedTheme();
  }

  protected toThemeLabel(theme: string): string {
    return theme.charAt(0).toUpperCase() + theme.slice(1);
  }

  private applySelectedTheme(): void {
    const theme = THEME_PRESETS[this.selectedThemeFamily()][this.selectedThemeMode()];
    applyTailngTheme(theme);
  }
}

function isThemeMode(value: string): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

function isThemeFamily(value: string): value is ThemeFamily {
  return (THEME_FAMILIES as readonly string[]).includes(value);
}

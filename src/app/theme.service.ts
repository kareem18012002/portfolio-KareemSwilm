import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly theme = signal<Theme>('dark');
  private userSelectedTheme = false;

  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const preference = window.matchMedia('(prefers-color-scheme: light)');
    this.setTheme(preference.matches ? 'light' : 'dark');
    preference.addEventListener('change', (event) => {
      if (!this.userSelectedTheme) this.setTheme(event.matches ? 'light' : 'dark');
    });
  }

  toggle(): void {
    this.userSelectedTheme = true;
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.document.documentElement.dataset['theme'] = theme;
  }
}

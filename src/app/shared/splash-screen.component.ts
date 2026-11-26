import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, PLATFORM_ID, Renderer2, signal } from '@angular/core';
import { cvData } from '../cv-data';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  template: `
    @if (visible()) {
      <div class="splash-screen" aria-hidden="true">
        <h1 class="splash-name" [attr.aria-label]="cvData.shortName">
          @for (letter of letters; track $index) {
            <span [style.animation-delay.ms]="$index * 75">{{ letter }}</span>
          }
        </h1>
        <span class="splash-rule"></span>
      </div>
    }
  `
})
export class SplashScreenComponent {
  readonly cvData = cvData;
  readonly letters = Array.from(cvData.shortName);
  readonly visible = signal(true);

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const body = this.document.body;
      this.renderer.addClass(body, 'splash-active');
      const timeoutId = setTimeout(() => {
        this.visible.set(false);
        this.renderer.removeClass(body, 'splash-active');
      }, 3000);

      this.destroyRef.onDestroy(() => {
        clearTimeout(timeoutId);
        this.renderer.removeClass(body, 'splash-active');
      });
    });
  }
}

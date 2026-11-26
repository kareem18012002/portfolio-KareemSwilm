import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly activeSection = signal('home');

  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.body.classList.add('reveal-ready');

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target instanceof HTMLElement) this.activeSection.set(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.4] });
    sections.forEach((section) => navObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((item) => revealObserver.observe(item));
  }
}

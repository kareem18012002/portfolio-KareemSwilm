import { Component, inject, signal } from '@angular/core';
import { cvData } from '../cv-data';
import { CvDownloadService } from '../cv-download.service';
import { ScrollService } from './scroll.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="site-header">
      <nav class="nav-shell" aria-label="Main navigation">
        <a class="brand" href="#home" aria-label="Kareem Ezzat, home"><span class="brand-mark">K</span><span>kareem<span class="brand-dot">.</span></span></a>
        <div class="nav-links">
          @for (item of navigation; track item.id) {
            <a [href]="'#' + item.id" [class.active]="scroll.activeSection() === item.id" [attr.aria-current]="scroll.activeSection() === item.id ? 'location' : null">{{ item.label }}</a>
          }
        </div>
        <button class="menu-toggle" type="button" (click)="mobileMenuOpen.update((open) => !open)" [attr.aria-expanded]="mobileMenuOpen()" aria-controls="mobile-menu" [attr.aria-label]="mobileMenuOpen() ? 'Close navigation menu' : 'Open navigation menu'">{{ mobileMenuOpen() ? 'Close' : 'Menu' }}</button>
        <div class="nav-actions">
          <button class="nav-resume" type="button" (click)="cvDownload.download()" aria-label="Download Kareem's CV">CV <span aria-hidden="true">↓</span></button>
          <button class="theme-toggle" type="button" (click)="theme.toggle()" [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'" [attr.title]="theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'">
            <span class="theme-indicator" aria-hidden="true"></span>
          </button>
          <a class="mobile-contact" href="#contact">Contact</a>
        </div>
      </nav>
      <div class="mobile-nav-panel" id="mobile-menu" aria-label="Mobile navigation" [hidden]="!mobileMenuOpen()">
        @for (item of navigation; track item.id) {
          <a [href]="'#' + item.id" [class.active]="scroll.activeSection() === item.id" [attr.aria-current]="scroll.activeSection() === item.id ? 'location' : null" (click)="mobileMenuOpen.set(false)">{{ item.label }} <span aria-hidden="true">↗</span></a>
        }
      </div>
    </header>
  `
})
export class NavbarComponent {
  readonly cvData = cvData;
  readonly scroll = inject(ScrollService);
  readonly theme = inject(ThemeService);
  readonly cvDownload = inject(CvDownloadService);
  readonly mobileMenuOpen = signal(false);
  readonly navigation = [
    { id: 'about', label: 'About' }, { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }, { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' }
  ];
}

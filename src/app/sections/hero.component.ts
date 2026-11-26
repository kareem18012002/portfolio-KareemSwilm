import { afterNextRender, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { cvData } from '../cv-data';
import { CvDownloadService } from '../cv-download.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section" id="home" aria-labelledby="hero-title">
      <div class="hero-grid page-shell">
        <div class="hero-copy" data-reveal>
          <p class="eyebrow"><span>Portfolio / Backend</span><span>{{ cvData.location }}</span></p>
          <h1 id="hero-title"><span>Kareem</span><span class="hero-surname">Ezzat Gharib Ali</span></h1>
          <p class="hero-lead">{{ cvData.heroLine }}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">See selected work <span aria-hidden="true">↘</span></a>
            <button class="button button-quiet" type="button" (click)="cvDownload.download()">Download CV <span aria-hidden="true">↓</span></button>
          </div>
          <div class="social-links" aria-label="Contact links">
            <a [href]="cvData.links.github" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a [href]="cvData.links.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a [href]="'mailto:' + cvData.email">Email <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside class="hero-note" data-reveal aria-label="Backend tools and focus">
          <figure class="profile-photo">
            @if (profileImageFailed()) {
              <span class="profile-photo-fallback" role="img" aria-label="Kareem Ezzat">KE</span>
            } @else {
              <img #profileImage src="assets/profile.jpg" width="220" height="220" alt="Kareem Ezzat" loading="eager" (error)="onProfileImageError()">
            }
          </figure>
          <div class="note-topline"><span>FIELD NOTES</span><span>01—03</span></div>
          <p class="note-title">The work, in a few words.</p>
          <dl class="note-list">
            <div><dt>Build with</dt><dd>C# / ASP.NET Core</dd></div>
            <div><dt>Work with</dt><dd>SQL Server / EF Core</dd></div>
            <div><dt>Focus on</dt><dd>REST APIs / Clean Architecture</dd></div>
          </dl>
          <span class="note-rule" aria-hidden="true"></span>
          <p class="note-caption">Freelance backend development · 2023—now</p>
        </aside>
      </div>
      <a class="hero-bottom page-shell" href="#about"><span>01</span><span class="hero-rule" aria-hidden="true"></span><span>Read on</span><span aria-hidden="true">↓</span></a>
    </section>
  `
})
export class HeroComponent {
  readonly cvData = cvData;
  readonly cvDownload = inject(CvDownloadService);
  readonly profileImageFailed = signal(false);
  private readonly profileImage = viewChild<ElementRef<HTMLImageElement>>('profileImage');

  constructor() {
    afterNextRender(() => {
      const image = this.profileImage()?.nativeElement;
      if (image?.complete && image.naturalWidth === 0) this.onProfileImageError();
    });
  }

  onProfileImageError(): void {
    this.profileImageFailed.set(true);
  }
}

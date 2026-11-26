import { Component } from '@angular/core';
import { cvData } from '../cv-data';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="section about-section" id="about" aria-labelledby="about-title">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">01 / A little context</p>
        <h2 id="about-title">Backend work, taught and learned.</h2>
      </div>
      <div class="about-grid">
        <p class="about-lead" data-reveal>{{ cvData.summary }}</p>
        <aside class="about-aside" data-reveal>
          <span class="aside-index">A note from my route here</span>
          <p>{{ cvData.aboutNote }}</p>
          <a class="text-link" href="#experience">More about my experience <span aria-hidden="true">↘</span></a>
        </aside>
      </div>
    </section>
  `
})
export class AboutComponent {
  readonly cvData = cvData;
}

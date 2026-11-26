import { Component } from '@angular/core';
import { cvData } from '../cv-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="section experience-section" id="experience" aria-labelledby="experience-title">
      <div class="section-heading section-heading-split" data-reveal>
        <div><p class="eyebrow">02 / Experience</p><h2 id="experience-title">What I’ve been working on.</h2></div>
        <p class="section-intro">Backend development, freelance work, and a year spent helping other people learn to code.</p>
      </div>
      <div class="experience-list">
        @for (item of cvData.experience; track item.role; let index = $index) {
          <article class="experience-item" data-reveal>
            <div class="experience-marker"><span>0{{ index + 1 }}</span><span class="marker-line" aria-hidden="true"></span></div>
            <div class="experience-main">
              <div class="experience-meta"><span>{{ item.period }}</span><span>{{ item.organization }}</span></div>
              <h3>{{ item.role }}</h3>
              @if (item.arrangement) { <p class="experience-arrangement">{{ item.arrangement }}</p> }
              <ul class="experience-points">
                @for (point of item.highlights; track point) { <li>{{ point }}</li> }
              </ul>
            </div>
          </article>
        }
      </div>
    </section>
  `
})
export class ExperienceComponent {
  readonly cvData = cvData;
}

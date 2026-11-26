import { Component } from '@angular/core';
import { cvData } from '../cv-data';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section class="section education-section" id="education" aria-labelledby="education-title">
      <div class="section-heading" data-reveal>
        <p class="eyebrow">05 / Education</p>
        <h2 id="education-title">Where I learned the basics.</h2>
      </div>
      <div class="education-layout">
        <div class="education-list">
          @for (item of cvData.education; track item.title; let index = $index) {
            <article class="education-item" data-reveal>
              <span class="education-index">0{{ index + 1 }}</span>
              <div><p class="education-period">{{ item.period }}</p><h3>{{ item.title }}</h3><p class="education-institution">{{ item.institution }}</p>@if (item.details) { <p class="education-details">{{ item.details }}</p> }</div>
            </article>
          }
        </div>
        <aside class="language-note" data-reveal>
          <p class="eyebrow">Languages</p>
          <ul>@for (language of cvData.languages; track language) { <li>{{ language }}</li> }</ul>
        </aside>
      </div>
    </section>
  `
})
export class EducationComponent {
  readonly cvData = cvData;
}

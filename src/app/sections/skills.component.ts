import { Component } from '@angular/core';
import { cvData } from '../cv-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="section skills-section" id="skills" aria-labelledby="skills-title">
      <div class="section-heading section-heading-split" data-reveal>
        <div><p class="eyebrow">04 / Working toolkit</p><h2 id="skills-title">Tools I reach for.</h2></div>
        <p class="section-intro">Grouped by the kind of work I use them for, not by how impressive they sound.</p>
      </div>
      <div class="skills-list">
        @for (group of cvData.skills; track group.category; let index = $index) {
          <section class="skill-row" [attr.aria-labelledby]="'skill-group-' + index" data-reveal>
            <div class="skill-heading"><span class="skill-number">0{{ index + 1 }}</span><h3 [id]="'skill-group-' + index">{{ group.category }}</h3></div>
            <ul class="skill-values">@for (skill of group.skills; track skill) { <li>{{ skill }}</li> }</ul>
          </section>
        }
      </div>
      <p class="soft-skills" data-reveal><span>Also in the mix</span>{{ cvData.softSkills.join(' · ') }}</p>
    </section>
  `
})
export class SkillsComponent {
  readonly cvData = cvData;
}

import { Component } from '@angular/core';
import { cvData } from '../cv-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="section projects-section" id="projects" aria-labelledby="projects-title">
      <div class="section-heading section-heading-split" data-reveal>
        <div><p class="eyebrow">03 / Selected work</p><h2 id="projects-title">A few things I’ve built.</h2></div>
        <p class="section-intro">Open a project for the problem, the technical choice, and what the work showed.</p>
      </div>
      <div class="project-list">
        @for (project of cvData.projects; track project.name; let index = $index) {
          <details class="project-entry" [attr.open]="index === 0 ? '' : null" data-reveal>
            <summary>
              <span class="project-index">0{{ index + 1 }}</span>
              <span class="project-title-wrap"><span class="project-kind">{{ project.kind }}</span><span class="project-name">{{ project.name }}</span></span>
              <span class="project-period">{{ project.period }}</span>
              <span class="project-toggle" aria-hidden="true"></span>
            </summary>
            <div class="project-detail">
              <p class="project-summary">{{ project.summary }}</p>
              <div class="project-story">
                <div><span class="story-label">THE PROBLEM</span><p>{{ project.challenge }}</p></div>
                <div><span class="story-label">MY DECISION</span><p>{{ project.solution }}</p></div>
                <div><span class="story-label">WHAT STAYED WITH ME</span><p>{{ project.takeaway }}</p></div>
              </div>
              @if (project.outcome) { <p class="project-outcome">{{ project.outcome }}</p> }
              <div class="project-bottom">
                <div class="tag-list" aria-label="Technology stack">
                  @for (tech of project.stack; track tech) { <span class="tag">{{ tech }}</span> }
                </div>
                @if (project.href) {
                  <a class="text-link" [href]="project.href" target="_blank" rel="noopener noreferrer">{{ project.hrefLabel }} <span aria-hidden="true">↗</span></a>
                } @else {
                  <span class="link-placeholder">No public link listed</span>
                }
              </div>
            </div>
          </details>
        }
      </div>
    </section>
  `
})
export class ProjectsComponent {
  readonly cvData = cvData;
}

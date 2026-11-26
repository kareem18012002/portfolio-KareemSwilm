import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { AboutComponent } from './sections/about.component';
import { ContactComponent } from './sections/contact.component';
import { EducationComponent } from './sections/education.component';
import { ExperienceComponent } from './sections/experience.component';
import { FooterComponent } from './sections/footer.component';
import { HeroComponent } from './sections/hero.component';
import { ProjectsComponent } from './sections/projects.component';
import { SkillsComponent } from './sections/skills.component';
import { NavbarComponent } from './shared/navbar.component';
import { ScrollService } from './shared/scroll.service';
import { SeoService } from './seo.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, EducationComponent, ContactComponent, FooterComponent],
  template: `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <app-navbar />
    <main id="main-content">
      <app-hero />
      <div class="content-shell page-shell">
        <app-about />
        <app-experience />
        <app-projects />
        <app-skills />
        <app-education />
        <app-contact />
      </div>
    </main>
    <app-footer />
  `
})
export class AppComponent implements OnInit, AfterViewInit {
  private readonly seo = inject(SeoService);
  private readonly theme = inject(ThemeService);
  private readonly scroll = inject(ScrollService);

  ngOnInit(): void {
    this.seo.initialize();
    this.theme.initialize();
  }

  ngAfterViewInit(): void {
    this.scroll.initialize();
  }
}

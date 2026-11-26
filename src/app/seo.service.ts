import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { cvData } from './cv-data';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  initialize(): void {
    const pageTitle = `${cvData.name} | ${cvData.role}`;
    const description = `${cvData.role} in ${cvData.location}. I build REST APIs with C#, ASP.NET Core, Entity Framework Core, and SQL Server.`;
    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:url', content: cvData.links.portfolio });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    const scriptId = 'person-json-ld';
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: cvData.name,
      jobTitle: cvData.role,
      email: cvData.email,
      telephone: cvData.phone,
      address: { '@type': 'PostalAddress', addressLocality: cvData.location },
      url: cvData.links.portfolio,
      sameAs: [cvData.links.github, cvData.links.linkedin]
    });
  }
}

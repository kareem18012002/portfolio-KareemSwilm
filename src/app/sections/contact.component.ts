import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cvData } from '../cv-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="section contact-section" id="contact" aria-labelledby="contact-title">
      <div class="contact-grid">
        <div class="contact-copy" data-reveal>
          <p class="eyebrow">06 / Contact</p>
          <h2 id="contact-title">Have a backend problem to work through?</h2>
          <p class="contact-intro">I’m open to a straightforward conversation about .NET backend work. Email is the easiest way to reach me.</p>
          <a class="contact-email" [href]="'mailto:' + cvData.email"><span>{{ cvData.email }}</span><span aria-hidden="true">↗</span></a>
        </div>
        <div class="contact-side" data-reveal>
          <div class="contact-methods" aria-label="Other ways to find me">
            @for (link of cvData.contacts; track link.label) {
              @if (link.icon === 'github' || link.icon === 'linkedin' || link.icon === 'phone') {
                <a class="contact-method" [href]="link.href" [target]="link.icon === 'github' || link.icon === 'linkedin' ? '_blank' : null" [rel]="link.icon === 'github' || link.icon === 'linkedin' ? 'noopener noreferrer' : null">
                  <span>{{ link.label }}</span><span>{{ link.icon === 'github' ? 'github.com/kareem18012002' : link.icon === 'phone' ? cvData.phone : 'LinkedIn profile' }}</span><span aria-hidden="true">↗</span>
                </a>
              } @else if (link.icon === 'location') {
                <p class="contact-method contact-location"><span>{{ link.label }}</span><span>{{ cvData.location }}</span></p>
              }
            }
          </div>
          <form class="contact-form" (submit)="openEmail($event, name.value, email.value, message.value)">
            <p class="form-heading">Or leave a message to open in your email app.</p>
            <label for="contact-name">Your name</label>
            <input #name id="contact-name" name="name" autocomplete="name" required placeholder="Name">
            <label for="contact-email">Your email</label>
            <input #email id="contact-email" name="email" type="email" autocomplete="email" required placeholder="you@example.com">
            <label for="contact-message">A few words</label>
            <textarea #message id="contact-message" name="message" rows="3" required placeholder="What would you like to discuss?"></textarea>
            <button class="button button-primary" type="submit">Prepare email <span aria-hidden="true">↗</span></button>
            <p class="form-note">Your message stays in your email app until you send it.</p>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  readonly cvData = cvData;
  private readonly platformId = inject(PLATFORM_ID);

  openEmail(event: SubmitEvent, name: string, email: string, message: string): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\nFrom: ${name.trim()} <${email.trim()}>`);
    window.location.href = `mailto:${cvData.email}?subject=${subject}&body=${body}`;
  }
}

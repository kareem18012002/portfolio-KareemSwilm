import { Component } from '@angular/core';
import { cvData } from '../cv-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <div class="footer-shell page-shell">
        <a class="brand" href="#home" aria-label="Kareem Ezzat, back to top"><span class="brand-mark">K</span><span>{{ cvData.shortName }}</span></a>
        <p>{{ cvData.role }} <span>· © {{ year }} {{ cvData.shortName }}</span></p>
        <a href="#home" class="back-top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly cvData = cvData;
  readonly year = new Date().getFullYear();
}

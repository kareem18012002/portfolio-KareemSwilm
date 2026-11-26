import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { cvPdfBase64 } from './cv-pdf-base64';

@Injectable({ providedIn: 'root' })
export class CvDownloadService {
  private readonly platformId = inject(PLATFORM_ID);

  download(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const binary = window.atob(cvPdfBase64);
    const buffer = new ArrayBuffer(binary.length);
    const bytes = new Uint8Array(buffer);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    const url = URL.createObjectURL(new Blob([buffer], { type: 'application/pdf' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Kareem_Ezzat_CV_DotNet_Backend_ATS.pdf';
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-section.component.html',
  styleUrls: ['./media-section.component.css']
})
export class MediaSectionComponent implements AfterViewInit{
  constructor(private sanitizer: DomSanitizer) {}

  @Input() sources: any[] = [];

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngAfterViewInit() {
    this.loadTikTokScript();
  }

  loadTikTokScript() {
    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, force TikTok to re-render embeds
      // @ts-ignore
      if (window.tiktokEmbedLoad) {
        // sometimes TikTok exposes this
        // @ts-ignore
        window.tiktokEmbedLoad();
      }
    }
  }

}


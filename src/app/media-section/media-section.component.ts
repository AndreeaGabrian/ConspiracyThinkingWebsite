import { Component, Input, AfterViewInit,OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-section.component.html',
  styleUrls: ['./media-section.component.css']
})
export class MediaSectionComponent  {
  constructor(private sanitizer: DomSanitizer) {}
  failedTikToks: { [id: string]: boolean } = {};
  loadedTikToks: { [id: string]: boolean } = {};


  @Input() sources: any[] = [];
  @Input() label: string = 'Sources:';


  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadTikTok(id: string) {
    this.loadedTikToks[id] = true;
    this.failedTikToks[id] = false;

    setTimeout(() => {
      try {
        // Try to re-trigger TikTok rendering
        // @ts-ignore
        if (window.tiktokEmbedLoad) {
          // @ts-ignore
          window.tiktokEmbedLoad();
        }

        // Optional: detect failure with a timeout check
        setTimeout(() => {
          const embed = document.querySelector(`blockquote[data-video-id="${id}"] iframe`);
          if (!embed) {
            this.failedTikToks[id] = true;
          }
        }, 1000);
      } catch (e) {
        console.warn('TikTok load error:', e);
        this.failedTikToks[id] = true;
      }
    }, 300);
  }


}


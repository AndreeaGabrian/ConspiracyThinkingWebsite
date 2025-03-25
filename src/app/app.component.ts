import {Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MediaSectionComponent} from './media-section/media-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MediaSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('videoRef1') videoElement!: ElementRef;
  answersVisibility: { [key: string]: boolean } = {};
  userAnswers: { [key: string]: string } = {};
  feedbackMessages: { [key: string]: string } = {};
  sourceButtonText: string = "Check the sources";


  correctAnswers: { [key: string]: boolean } = {
    answer1: false,
    answer2: false,
    answer3: false
  };

  mediaSources = {
    answer1: [
      { type: 'link', src: 'https://www.theguardian.com/commentisfree/2020/sep/20/qanon-conspiracy-child-abuse-truth-trump', label: 'article from The Guardian' },
      { type: 'link', src: 'https://www.france24.com/en/20201009-qanon-sows-panic-with-child-trafficking-misinformation', label: 'article from France24' },
      { type: 'image', src: 'src/assets/images/question1/q1-2.jpg', alt: 'image' },
      { type: 'image', src: 'src/assets/images/question1/q1-3.jpg', alt: 'image' },
      { type: 'video', src: 'src/assets/videos/question1/q1-1.mp4' }

    ],
    answer2: [
      {type: 'link', src: 'https://www.theguardian.com/us-news/2021/jan/20/qanon-biden-inauguration-trump-antisemitism-white-nationalism', label: 'article from The Guardian'},
      {type: 'link', src: 'https://gnet-research.org/2021/03/31/how-qanon-reacts-to-failed-predictions', label: 'article from Gnet'},
      { type: 'youtube', src:"https://www.youtube.com/embed/c6J8OHsQKWQ?si=pXSlP--529BCH56o", label:  "video"},
      { type: 'youtube', src: "https://www.youtube.com/embed/vthtgl1faY0?si=teg9AROrWpX7Sj8M", label: "video" }
    ],
    answer3: [
      {type: 'link', src: "https://www.nbcnews.com/think/opinion/psychology-qanon-why-do-seemingly-sane-people-believe-bizarre-conspiracy-ncna900171", label: 'article from NBC News'},
      {type: 'link', src: "https://time.com/5929843/madeleine-albright-us-vs-them-thinking", label: 'article from Time'},
      { type: 'youtube', src:"https://www.youtube.com/embed/Ukc4MejaGl8?si=WpIVQH0IOoTGriDI", label:  "video"},
      { type: 'tiktok', src: "https://www.tiktok.com/@matrix_hacked11/video/7173390832140094762", id: "7173390832140094762" }
    ]
  };


  toggleAnswer(questionId: string) {
    this.answersVisibility[questionId] = !this.answersVisibility[questionId];
  }

  checkAnswer(questionId: string, isTrue: boolean) {
    if (this.correctAnswers[questionId] === isTrue) {
      this.userAnswers[questionId] = 'correct';
      this.feedbackMessages[questionId] = "✅ Correct! This claim is false because there is no evidence supporting it.";
    } else {
      this.userAnswers[questionId] = 'incorrect';
      this.feedbackMessages[questionId] = "❌ Incorrect. This claim is actually false. Be sure to check the sources!";
    }
  }

  scrollToNext(): void {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({behavior: 'smooth'});
      this.playVideo()
    }
  }
  scrollToQuestions(): void {
    const nextSection = document.getElementById('questions-section');
    if (nextSection) {
      nextSection.scrollIntoView({behavior: 'smooth'});
    }
  }

  playVideo() {
    if (this.videoElement && this.videoElement.nativeElement) {
      this.videoElement.nativeElement.play();
    }
  }


}

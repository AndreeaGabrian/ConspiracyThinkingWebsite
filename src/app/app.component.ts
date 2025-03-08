import {Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('videoRef1') videoElement!: ElementRef;
  answersVisibility: { [key: string]: boolean } = {};
  userAnswers: { [key: string]: string } = {};
  feedbackMessages: { [key: string]: string } = {};
  sourceButtonText: string = "Check the sources";

  // Define correct answers with an explicit type
  correctAnswers: { [key: string]: boolean } = {
    answer1: false, // False: No evidence supports this claim.
    answer2: false, // False: Q's predictions are vague or false.
    answer3: false  // False: "Us vs. Them" thinking is a logical fallacy.
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

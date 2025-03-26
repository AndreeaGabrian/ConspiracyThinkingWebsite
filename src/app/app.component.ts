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
  userAnswersPopulism: { [key: string]: 'correct' | 'incorrect' | null } = {};
  userAnswers: { [key: string]: string } = {};
  feedbackMessages: { [key: string]: string } = {};
  sourceButtonText: string = "Check the sources";
  showBibliography = false;



  correctAnswers: { [key: string]: boolean } = {
    answer1: false,
    answer2: false,
    answer3: false
  };

  populism1 = [
    { type: 'youtube', src: 'https://youtube.com/embed/JH4zNLXlcYE?si=agP9AQgFDRM1Pblx' },
    { type: 'youtube', src: 'https://youtube.com/embed/TExdmFEETPQ?si=LmqecN-pKIvVYoIw' },
    { type: 'youtube', src: 'https://youtube.com/embed/Tsh9p5H-g5k?si=OUcRPSP1q4HB4W13' },
  ];

  populism2 = [
    { type: 'youtube', src: 'https://youtube.com/embed/IOFR3slDz8U' },
    { type: 'youtube', src: 'https://youtube.com/embed/PAauiLx3AvQ?si=7LkSCCqrVozXa9NB' },
  ];

  populism3 = [
    { type: 'image', src: 'src/assets/images/anger2.png', alt: 'image' },
    { type: 'youtube', src: "https://youtube.com/embed/5mZLZGU7hmo?si=_s9kPNWtXZlTmnEF" },
    { type: 'youtube', src: "https://youtube.com/embed/rUJwxsKHJps?si=J2QAUYjGCKDPc7uD" },
  ];


  mediaSources = {
    answer1: [
      { type: 'link', src: 'https://www.theguardian.com/commentisfree/2020/sep/20/qanon-conspiracy-child-abuse-truth-trump', label: 'article from The Guardian' },
      { type: 'link', src: 'https://www.france24.com/en/20201009-qanon-sows-panic-with-child-trafficking-misinformation', label: 'article from France24' },
      { type: 'image', src: 'src/assets/images/q1-2.jpg', alt: 'image' },
      { type: 'image', src: 'src/assets/images/q1-3.jpg', alt: 'image' },
      { type: 'video', src: 'src/assets/videos/q1-1.mp4' }

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
      { type: 'tiktok', src: "https://www.tiktok.com/@matrix_hacked11/video/7173390832140094762", id: "7173390832140094762",placeholder: 'src/assets/images/tiktok-preview.png' }
    ]
  };

  questionsPopulism = [
    {
      id: 'populismQ1',
      question: `Wilders has argued that the Netherlands must choose between housing Dutch citizens or allowing immigration. What is this an example of?`,
      options: [
        { key: 'A', text: 'Presenting two options as the only choices when others exist.' },
        { key: 'B', text: 'Making a broad claim based on limited evidence.' },
        { key: 'C', text: 'Attacking the opponent instead of the argument.' },
        { key: 'D', text: 'Suggesting something is true because many people support it.' }
      ],
      correctAnswer: 'A',
      explanation: 'This is a classic example of a false dilemma — framing a complex issue as a black-and-white choice.',
      contextMedia: [
        {type: 'text', content: 'Housing in Netherlands is a complex issue and there were a lot of debated about it'},
        { type: 'image', src: "src/assets/images/qp1-1.png", alt: 'image' },
        { type: 'youtube', src: "https://youtube.com/embed/rRvMuev8lNM?si=KRPKSfwBpgnDP78u", label: 'Video' }
      ],
      sources: [
        { type: 'image', src: "src/assets/images/qp1-2.png", alt: 'image' },
        { type: 'link', src: 'https://www.politico.eu/article/geert-wilders-affordable-social-housing-code-immigration-dutch-far-right/ ', label: 'News article' },
        { type: 'tiktok', src: "https://www.tiktok.com/@rodaportal/video/7473798130790567170", id: "7473798130790567170" ,placeholder: 'src/assets/images/tiktok-preview.png'},
      ]
    },
    {
      id: 'populismQ2',
      question: 'Which of the following is an example of an emotional appeal regarding the housing crisis?',
      options: [
        { key: 'A', text: '“Dutch citizens deserve a home before newcomers do. It’s time to take back our country!”' },
        { key: 'B', text: '“Statistics show that housing shortages are caused by a mix of economic factors, not just immigration.”' },
        { key: 'C', text: '“The housing crisis is complex, and we need pragmatic solutions involving construction and policy changes.”' },
        { key: 'D', text: '“In the past decade, European countries have implemented different policies to address housing shortages.”' }
      ],
      correctAnswer: 'A',
      explanation: 'This uses emotionally charged language and nationalistic framing to appeal to fear and identity.',

      sources: [
        { type: 'video', src: 'src/assets/videos/qp2.mp4' },
        { type: 'youtube', src:"https://www.youtube.com/embed/1FHuUMd1uy0?si=QSlynqcxex88YIB7", label:  "video"},
        { type: 'tiktok', src: "https://www.tiktok.com/@euronews.tv/video/7304628940914560288", id: "7304628940914560288" ,placeholder: 'src/assets/images/tiktok-preview.png'},
        { type: 'link', src: 'https://www.bnnvara.nl/joop/artikelen/woningnood-niet-veroorzaakt-door-vluchtelingen-maar-door-vvd', label: 'Article from Bnnvara' },
      ]
    },
    {
      id: 'populismQ3',
      question: `The leftist politician Frans Timmermans from the green/labour party has agreed to give away Dutch houses to foreigners leaving more than 70% of the Dutch citizens without a home.\n\nBefore believing this, what is the most important step to take?`,
      options: [
        { key: 'A', text: 'Check if credible sources have verified the quote.' },
        { key: 'B', text: 'See if people in the comments section believe it.' },
        { key: 'C', text: 'Assume it\'s true because it confirms what you already thought.' },
        { key: 'D', text: 'Share it quickly before it gets deleted!' }
      ],
      correctAnswer: 'A',
      explanation: 'Always verify shocking claims with reliable sources — misinformation often spreads by skipping this step.',
      contextMedia: [
        { type: 'text', content: 'The  leftist politician Frans Timmermans from the green/labour party has agreed to give away Dutch houses to foreigners leaving more than 70% procent of the dutch citizens without a home \n' },
        { type: 'image', src: 'src/assets/images/qp3.png' }
      ],
      sources: [ { type: 'text', src: 'No sources this time, you have only the context provided and the previous questions' }]
    },
    {
      id: 'populismQ4',
      question: 'Which of the following slogans from a Romanian far-right nationalist group best represents an appeal to fear?',
      options: [
        { key: 'A', text: '“We must protect Romanian traditions for future generations.”' },
        { key: 'B', text: '“If we don’t act now, foreigners will take over our country, and we’ll be second-class citizens!”' },
        { key: 'C', text: '“We should strengthen our national identity while cooperating with European allies.”' },
        { key: 'D', text: '“Cultural preservation is important, but so is adapting to change.”' }
      ],
      correctAnswer: 'B',
      explanation: 'This slogan creates fear about loss of control and invokes threats to national identity.',
      contextMedia: [
        { type: 'image', src: 'src/assets/images/qp4-1.png' },
        // { type: 'youtube', src: 'https://youtube.com/embed/5mZLZGU7hmo?si=jJvrHnyZgg6KuFqi',label:  "video" }
        { type: 'youtube', src: 'https://www.youtube.com/embed/dFpXZaBnnC0?si=lhSQhBwbxQ3k3NGC',label:  "video" }
      ],
      sources: [
        { type: 'text', content: 'No sources this time, you have only the context provided and the information on this website' }
      ]
    }
  ];


  checkAnswerPopulism(questionId: string, selected: string) {
    const question = this.questionsPopulism.find(q => q.id === questionId);
    if (!question) return;

    const isCorrect = selected === question.correctAnswer;
    this.userAnswers[questionId] = isCorrect ? 'correct' : 'incorrect';
    this.feedbackMessages[questionId] = isCorrect
      ? '✅ Correct!'
      : `❌ Not quite. The correct answer is ${question.correctAnswer}.`;
  }



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

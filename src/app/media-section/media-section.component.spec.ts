import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSectionComponent } from './media-section.component';

describe('MediaSectionComponent', () => {
  let component: MediaSectionComponent;
  let fixture: ComponentFixture<MediaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaComponent } from './media.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports: [HttpClientTestingModule] // Add this line
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component spec', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the mean of data set 1', () => {
    const data1 = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    expect(component.calculateMean(data1)).toBe(550.6);
  });

  it('should calculate the mean of data set 2', () => {
    const data2 = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    expect(component.calculateMean(data2)).toBe(60.32000000000001);
  });
});

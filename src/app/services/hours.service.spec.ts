import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { HoursService } from './hours.service';

describe('HoursService', () => {
  let service: HoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Provide HttpClientTestingModule
    });
    service = TestBed.inject(HoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
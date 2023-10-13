import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { SizeService } from './size.service';

describe('SizeService', () => {
  let service: SizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Provide HttpClientTestingModule
    });
    service = TestBed.inject(SizeService);
  });

  it('should be created service hours', () => {
    expect(service).toBeTruthy();
  });
});

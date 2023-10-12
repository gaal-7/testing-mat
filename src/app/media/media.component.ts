import { Component, OnInit } from '@angular/core';
import { SizeService } from '../services/size.service';
import { HoursService } from '../services/hours.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {
  constructor(private sizeService: SizeService, private hoursService: HoursService) {}

  data1: number[] = [];
  data2: number[] = [];
  mean1: number = 0;
  mean2: number = 0;

  ngOnInit(): void {
    this.sizeService.getSize()
      .pipe(
        switchMap(response => {
          this.data1 = response.data;
          this.mean1 = this.calculateMean(this.data1);
          return this.hoursService.getHours();
        })
      )
      .subscribe(response => {
        this.data2 = response.data;
        this.mean2 = this.calculateMean(this.data2);
      });
  }

  calculateMean(data: number[]): number {
    if (data.length === 0) {
      return 0;
    }

    const sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
  }
}

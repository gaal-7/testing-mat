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

  sizes: number[] = [];
  hours: number[] = [];
  mean1: number = 0;
  mean2: number = 0;

  ngOnInit(): void {
   
      this.sizeService.getSize().subscribe((data)=>{
        console.log(data);
        alert(data);

        this.sizes = data.data;
        this.mean1 = this.calculateMean(this.sizes);
    })

    this.hoursService.getHours().subscribe((data)=>{
        console.log(data);
        alert(data);
        this.hours = data.data;
        this.mean2 = this.calculateMean(this.hours);
    });
  }

  calculateMean(data: number[]): number {
    let media;
    if (data.length === 0) {
      return 0;
    }

    const sum = data.reduce((a, b) => a + b, 0);
    media = sum / data.length;
    media = Number(media.toFixed(2));
    return media;
  }


  media(lista: number[]): number {
    const num = lista.length;
    let sum = 0;
    let media = 0;

    for(let i = 0; i < num; i++) {
        const value = Number(lista[i]);
        if (!isNaN(value)) {
        sum += value;
        }
    }

    media = sum / num;
    media = Number(media.toFixed(2));
    
    console.log(media);

    return media;
}
}

/*
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
*/
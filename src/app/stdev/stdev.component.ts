import { Component, OnInit } from '@angular/core';
import { SizeService } from '../services/size.service';
import { HoursService } from '../services/hours.service';

@Component({
  selector: 'app-stdev',
  templateUrl: './stdev.component.html',
  styleUrls: ['./stdev.component.css']
})

export class StdevComponent implements OnInit{
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
        this.mean1 = this.calculateStandardDeviation(this.sizes);
    })

    this.hoursService.getHours().subscribe((data)=>{
        console.log(data);
        alert(data);
        this.hours = data.data;
        this.mean2 = this.calculateStandardDeviation(this.hours);
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

  calculateStandardDeviation(data: number[]): number {
   /* if (data.length === 0) {
      return 0;
    }
  
    const mean = this.calculateMean(data);
  
    // Calcular la suma de las diferencias al cuadrado
    const squaredDifferences = data.map(value => Math.pow(value - mean, 2));
  
    // Calcular la varianza como el promedio de las diferencias al cuadrado
    const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / data.length;
  
    // Calcular la desviación estándar como la raíz cuadrada de la varianza
    const standardDeviation = Math.sqrt(variance).toFixed(2);

  
    return parseFloat(standardDeviation);
*/
    if (!data || data.length === 0) {
      return 0;
    }
  
    const num = data.length;
    const sum = data.reduce((acc, value) => acc + value, 0);
    const media = sum / num;
  
    const sumDifferences = data.reduce((acc, value) => {
      const difference = value - media;
      return acc + difference * difference;
    }, 0);
  
    const stddev = Math.sqrt(sumDifferences / (num - 1));
    return Number(stddev.toFixed(2));
  }
  
}


import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

      // Doughnut
      @Input() public ChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
      @Input() public ChartData: MultiDataSet = [[350, 450, 100]];
      @Input() public ChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}

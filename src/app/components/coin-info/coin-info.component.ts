import { ActivatedRoute, Params } from '@angular/router';
import { CryptoService } from 'src/app/services/crypto.service';
import { Component, Input, OnInit } from '@angular/core';
// import { ChartOptions } from 'chart.js';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
import { Chart, registerables } from 'chart.js'
import { chartDays } from 'src/app/data/chart-days-data';

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.component.html',
  styleUrls: ['./coin-info.component.css']
})
export class CoinInfoComponent implements OnInit {
  selected: any;

  chartDays: any = chartDays

  currency: string = 'USD';
  days: number = 1;
  id!: string;
  histocalData: any;
  chart: any = []
  loading: boolean = false;

  constructor(private crytoService: CryptoService, private route: ActivatedRoute) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.route.params.subscribe((id: Params) => {
      this.id = id['id']
    })

    this.loading = true;
    this.crytoService.historicalChart(this.id, this.currency, this.days).subscribe((coin: any) => {
      this.loading = false;
      this.histocalData = coin.prices;
      console.log(this.histocalData)

      const myChart = new Chart('canvas', {
        type: 'line',
        data: {
            labels: this.histocalData.map((coin: any) => {
              let date = new Date(coin[0]);
              let time = date.getHours() > 12 ? `${date.getHours() - 12} : ${date.getMinutes()} : PM` : `${date.getHours()} : ${date.getMinutes()} AM`;
              return this.days === 1 ? time : date.toLocaleDateString();
            }),
            
            datasets: [{
                
                data: this.histocalData.map((coin: any) => coin[1]),
                label: `Price (Past ${this.days} Days ) in ${this.currency}`,
              
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                
                borderColor: '#eebc1d',
    
                // borderWidth: 1
            }]
        },
        options: {
          elements: {
            point: {
              radius: 1,
            }
          }
            // scales: {
            //     y: {
            //         beginAtZero: true
            //     }
            // }
        }
    });
    })

  }

  buttonClick() {
    return this.days
  }

}

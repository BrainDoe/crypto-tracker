import { CryptoService } from 'src/app/services/crypto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  currency: string = 'USD'
  symbol: string = '$';
  trendingCoins: any[] = []
  responsiveOptions!: any[];
  profit: any;

  constructor(private cryptoService: CryptoService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.cryptoService.trendingCoins(this.currency).subscribe(trendingCoins => {
      this.trendingCoins = trendingCoins
      this.trendingCoins.map(coin => {
        this.profit = coin.price_change_percentage_24h?.toFixed(2) >= 0 
      })
    })
  }

  // numberWithCommas(value: any) {
  //   return value.toString().replace(/\B(?=d{3})+(?!\d))/g, ",");
  // }


}

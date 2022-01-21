import { CryptoService } from 'src/app/services/crypto.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CoinComponent implements OnInit {
  id!: string;
  coin: any;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    
    this.loading = true;
    this.cryptoService.singleCoin(this.id).subscribe((coin: any) => {
      this.loading = false;
      this.coin = coin;
      console.log(this.coin)
      console.log(this.coin.name)
    })
  }

}

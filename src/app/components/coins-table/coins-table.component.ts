import { CryptoService } from 'src/app/services/crypto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins-table',
  templateUrl: './coins-table.component.html',
  styleUrls: ['./coins-table.component.css']
})
export class CoinsTableComponent implements OnInit {
  currency: string = 'USD';
  coinsList: any[] = []
  loading: boolean = false;
  inputValue!: string;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.loading = true;
    this.cryptoService.coinList(this.currency).subscribe(coins => {
      this.loading = false;
      this.coinsList = coins;
      console.log(this.coinsList)
    })
  }

  handleInput(event: any) {
    return this.inputValue = event.target.value
  }

  lists: any[] = [];

  handleSearch() {
    return this.lists =  this.coinsList.filter((coin) => coin.name.toLowerCase().includes(this.inputValue) || coin.symbol.toLowerCase().includes(this.inputValue))
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  baseUrl: string = 'https://api.coingecko.com/api/v3/coins'

  /*
    
export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

  */

  constructor(private http: HttpClient) { }

  historicalChart(id: string, currency: string, days: number = 365): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/market_chart?vs_currency=${currency}&days=${days}`)
  }

  trendingCoins(currency: string): Observable<any> { 
    return this.http.get<any>(`${this.baseUrl}/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }

  coinList(currency: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  }

  singleCoin(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(map((coin: any) => coin));
  }
}

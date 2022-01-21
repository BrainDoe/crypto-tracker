import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CoinComponent } from './pages/coin/coin.component';
import { BarnerComponent } from './components/barner/barner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CoinsTableComponent } from './components/coins-table/coins-table.component';

// PRIME NG COMPONENTS
import {CarouselModule} from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from  'primeng/inputtext'
import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button';
import { CoinInfoComponent } from './components/coin-info/coin-info.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CoinComponent,
    BarnerComponent,
    CarouselComponent,
    CoinsTableComponent,
    CoinInfoComponent,
    SafeHtmlPipe,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    CarouselModule,
    InputTextModule,
    ProgressSpinnerModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

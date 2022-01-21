import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-barner',
  templateUrl: './barner.component.html',
  styleUrls: ['./barner.component.css']
})
export class BarnerComponent implements OnInit {
  

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() days: any;
  @Input() selected: any;
  @Input() key: any;

  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {

  }

}

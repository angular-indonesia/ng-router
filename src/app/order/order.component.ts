import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title       = 'Orders Works';
  description = 'Your Orders Ready !';

  constructor() { }

  ngOnInit() {
  }

}

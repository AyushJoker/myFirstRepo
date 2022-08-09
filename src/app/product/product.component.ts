import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
ProductName:string="Dairy Milk";
price:any=59.60;
priceDayWise:any[]=[23,45,43,98,67,55];
Quantity:any=100;
mfd:Date=new Date();
a:any=12;
b:any=34;
Amount:any=this.Quantity*this.price;
products:Product[]=[
  {productname:'Dove',price:24,mfd:new Date(1,2.2020),quantity:20},
  {productname:'Love',price:34,mfd:new Date(1,2.2020),quantity:30},
  {productname:'Cove',price:44,mfd:new Date(1,2.20202),quantity:40},
  {productname:'Tove',price:54,mfd:new Date(1,2.2020),quantity:50}
]
  constructor() { }
  ngOnInit(): void {
  }
}

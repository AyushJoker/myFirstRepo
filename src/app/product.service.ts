import { Injectable } from '@angular/core';
import { Product } from './Models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[]=[
  {id:1,productName:'Dove',price:34,mfd:new Date(1,2.2020),quantity:20},
  {id:2,productName:'Lyril',price:39,mfd:new Date(3,2.2020),quantity:40},
  {id:3,productName:'Surf excel',price:78,mfd:new Date(11,2.2020),quantity:120},
  {id:4,productName:'Frooti',price:20,mfd:new Date(1,5.2022),quantity:20},
  {id:5,productName:'Frooi',price:20,mfd:new Date(1,5.2022),quantity:20},
]
  constructor() { }
  GetProducts():Product[]{
    return this.products
    ;
  }
  GetProductsByID(id:number){
    let products:Product[]=this.GetProducts();
    return products.find(p=>p.id==id);
  }
  AddProduct(Data:Product){
    let products:Product[]=this.GetProducts();
    products.push(Data);
  }
  UpdateProduct(product:Product){
let index=this.products.findIndex(p=>p.id==product.id);
this.products.splice(index,1);
this.products.push(product);
  }
  RemoveProduct(id:number){
    let index=this.products.findIndex(p=>p.id==id);
    this.products.splice(index,1);
  }
}

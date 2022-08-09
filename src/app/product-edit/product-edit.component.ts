import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../Models/Products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  currentproduct:any={
    id:1,productName:"Crackjack",price:20,quantity:20,mfd:new Date(1,2,2022)
  };
  
  constructor(private _service:ProductService,private route:Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.activatedroute.snapshot.params["id"];
    console.log(this._service.GetProductsByID(id));
    this.currentproduct=this._service.GetProductsByID(id);
  }
  onSubmit(myform:any){
    this.currentproduct=myform.value;
    this._service.UpdateProduct(this.currentproduct);
    console.log(this.currentproduct);
    this.route.navigateByUrl('list');
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  plist: Product[] = [];
  constructor(private _service: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.plist = this._service.GetProducts();
  }
  deleteProduct(id:any){
    if(confirm("Are you Sure ? ")){
      this._service.RemoveProduct(id);
      alert("Product Deleted Successfully");
      this._service.GetProducts();
    }
  }
}

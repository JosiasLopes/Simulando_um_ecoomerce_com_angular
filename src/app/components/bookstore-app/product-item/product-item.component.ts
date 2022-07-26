import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
	
	@Input()
	produto: Product = {id:0,name:"",price:0,quantity:0,category:"",img: ""};

  constructor() { }

  ngOnInit(): void {
  }

}

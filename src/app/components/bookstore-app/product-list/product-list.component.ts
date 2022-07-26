import { Component, OnInit } from '@angular/core';
//import {ProductService} from 'src/app/services/product.service';
import {ProductService} from 'src/app/services/teste.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

   
   produtos:Array<Product> = [{id:0,name:"",price:0,quantity:0,category:"",img: ""},
   {id:1,name:"Playstation 5",price:0,quantity:0,category:"",img: ""},
   {id:2,name:"",price:0,quantity:0,category:"",img: ""},
   {id:3,name:"",price:0,quantity:0,category:"",img: ""}
];
  constructor(private teste: ProductService) {
	
	 }

  ngOnInit(): void {
	  this.getProdutos();
  }
  
  getProdutos():void{
	  this.teste.getProdutos().subscribe((result)=>{
		  console.log(result)
		  this.produtos = result
	  })
  }

}

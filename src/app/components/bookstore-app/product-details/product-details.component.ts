import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import {ProductService} from 'src/app/services/teste.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  produtoId :any =""
  produto:Product = {id:0,name:"",price:0,quantity:0,category:"",img: ""}
  constructor(private service: ProductService,private rotaAtiva: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
	  
	  this.rotaAtiva.paramMap.subscribe(params=>{
	//pega o parametro passado na rota
	this.produtoId = params.get('id')
	console.log("Sou o Id passado na URL"+this.produtoId)
	//se o id passado na rota for diferente de nulo
	//lista um unico usuario e coloca os atributos dele no formulario
	if(this.produtoId !==null){
		
		this.service.getProduto(this.produtoId).subscribe(response=>{
			//console.table(response)
			
			/*this.userform.patchValue({
				id:response.id,
				nome:response.nome,
				sobrenome:response.sobrenome,
				idade:response.idade,
				profissao:response.profissao
			})*/
			
		})
		this.produto.id = this.produtoId
		//this.updateUser()
		
	}
	
})
	  
	  
  }

}

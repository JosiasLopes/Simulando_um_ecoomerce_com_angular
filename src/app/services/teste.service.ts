import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
	
	apiUrl = "http://localhost:8082/api/v1/produto/";
httpOptions = {
	headers: new HttpHeaders({
	'Content-Type':'application/json'})
}

//aqui é feita a injeçãodne dependencia
  constructor(private http:HttpClient, private rotaAtiva: ActivatedRoute) { }
  
  //os metododos retornam um observable e eese tem o metodo subscribe que chama
  //um callback(artrow function) que traz as resoostas da requisição
 getProdutos():Observable<Product[]>{
 return this.http.get<Product[]>(this.apiUrl);
}

getProduto(id:string):Observable<Product>{
	return this.http.get<Product>(`${this.apiUrl}${id}`)
}
//o primeiro paramentro e 1 url, o segundo o corpo da requisicao, o terceiro é opcional o header
saveProduto(produto: Product):Observable<Product>{
 return this.http.post<Product>(this.apiUrl,produto, this.httpOptions);
}

deleteProduto(produto:Product):Observable<Product>{
	return this.http.delete<Product>(`${this.apiUrl}/id`);
	
}

deleteProdutoById(id:number):Observable<Product>{
	return this.http.delete<Product>(`${this.apiUrl}${id}`);
	
}

updateProduto(id:string,produto:Product):Observable<Product>{
	return this.http.put<Product>(`${this.apiUrl}${id}`,produto)
}

}

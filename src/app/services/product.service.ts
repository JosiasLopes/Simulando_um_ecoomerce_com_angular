import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
export class ProductService {


apiUrl = "http://localhost:8082/api/v1/product/";
httpOptions = {
	headers: new HttpHeaders({
	'Content-Type':'application/json'})
}


//injeção de dependencia
constructor(private http:HttpClient, private rotaAtiva: ActivatedRoute) { }



/*
getProduct():Observable<Product>{
 return this.http<Product>(`${this.apiUrl}${id}`)
}
//a classe que chamar esse service vai precisar injetalo e nos metodos pra consultar
//terão de usar subscribe que contem um calback
getProducts():Observable<Product[]>{
 return this.http.get<Product[]>(this.apiUrl);
}

//o primeiro paramentro e 1 url, o segundo o corpo da requisicao, o terceiro é opcional o header
saveProducts(produto:Product):Observable<Product>{
 return this.http.post<Product>(this.apiUrl,produto, this.httpOptions)
}

deleteProduct(produto:Product):Observable<Product>{
	return this.http.delete<Product>(`${this.apiUrl}/id`);
	
}

deleteProductById(id:number):Observable<Product>{
	return this.http.delete<Product>(`${this.apiUrl}${id}`);
}


updateProduct(id:string,produto:Product):Observable<Product>{
	return this.http.put<Product>(`${this.apiUrl}${id}`,produto)
}
*/

}


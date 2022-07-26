import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { ProductItemComponent } from './components/bookstore-app/product-item/product-item.component';
import { ProductDetailsComponent } from './components/bookstore-app/product-details/product-details.component';


const routes: Routes = [
 {path:'',component: BookstoreAppComponent },
 {path:'details/:id',component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

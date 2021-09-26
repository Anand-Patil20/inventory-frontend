import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/Product';
import { AllServiceService } from '../all-service.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    product:Product = new Product();
    constructor(
      private allService:AllServiceService,
      private router:Router) {}

  ngOnInit(): void {
  
  }
  save() {
    this.allService.addProduct(this.product).subscribe(res=>{
      console.log("data saved");
      
    })
  }
  viewProduct(){
    this.router.navigate(['/products']);
  }
  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
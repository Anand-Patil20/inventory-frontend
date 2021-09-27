import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
      private router:Router,
      private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if(!sessionStorage.getItem('token')){
      this.router.navigate(['/login']);     
    }
  }
  save() {
    this.allService.addProduct(this.product).subscribe(res=>{
      if(res!=null){
        this.product=new Product();
        this._snackBar.open("Product added");
      }else{
        this._snackBar.open("Product id already exists","",{duration: 2500});
      }
    },err=>{
      this._snackBar.open("Issue while adding new product","",{duration: 2500});
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
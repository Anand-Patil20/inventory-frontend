import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';
import { Product } from '../domain/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data:any=null;
  showdata:any=null;
  editProd:Product=new Product();
  edit:Boolean=false;
  editindex: number=-1;
  category:String[]=[];
  selectedCategory:String="all_value";
  constructor(private allService:AllServiceService,
    private router:Router
    ) { }
  displayedColumns: string[] = ['productId', 'productName', 'productCategory', 'productDescription','units'];
  ngOnInit(): void {
    this.data=[];
    this.showdata=[];
    this.category=[];
    this.edit=false;
    this.editindex=-1;
    this.allService.getAllProducts().subscribe(res=>{
      this.data=res;
      this.showdata=res;
      for (let index = 0; index < this.data.length; index++) {
        this.category.push(this.data[index].productCategory);
      }
    })
  }
  editChange(element:Product,editIndex:number){
    this.edit=!this.edit;  
    if(this.edit){
      this.editProd=element;
      this.editindex=editIndex;
    }
    else{
      this.editProd=new Product();
      this.editindex=-1;
    }
  }
  filter(category:String){
    if(!category.includes("all_value"))
    {
      console.log(category);
      this.showdata=[];
      for (let index = 0; index < this.data.length; index++) {
        if(category.includes(this.data[index].productCategory))
         {
            this.showdata.push(this.data[index]);  
        }
      }
      
      console.log(this.showdata);
      
    }else{
      this.showdata=this.data;
    }
  }
  updateChange(prod:Product){
    console.log("call update",prod)
    this.data[this.editindex]=prod;
    this.edit=false;
    this.allService.updateProduct(prod).subscribe(res=>{
      this.ngOnInit();
    })  
    
  }
  deleteChange(prod:number){
    this.allService.deleteProduct(prod).subscribe(res=>{
      console.log(res);
     if(res=="Successfully Deleted")
      {
          this.ngOnInit();
      }
    });
  }
  addProduct(){
    // AddProductComponent
    this.router.navigate(['/addproduct']);
  }
  logout(){
    console.log("in logout");
    
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

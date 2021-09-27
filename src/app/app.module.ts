import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddProductComponent } from './add-product/add-product.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpRequestInterceptorService } from './http-request-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [
   {provide: HTTP_INTERCEPTORS ,useClass: HttpRequestInterceptorService ,multi:true}, 
   {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

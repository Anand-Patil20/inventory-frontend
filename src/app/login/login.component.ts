import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AllServiceService } from '../all-service.service';
import { User } from '../domain/User';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private allService:AllServiceService,
    private router:Router,
    private _snackBar: MatSnackBar) { }
  username:String="";
  password:String="";

  ngOnInit(): void {
  }
  authenticate(){
      let user=new User();
      user.username=this.username;
      user.password=this.password;
      this._snackBar.open("Loging in please wait");
      this.allService.authenticate(user).subscribe(res=>{
      sessionStorage.setItem('token', res);
      this.router.navigate(['/products']);
    });
    
  }

}

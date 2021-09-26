import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AllServiceService } from '../all-service.service';
import { User } from '../domain/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private allService:AllServiceService,private router:Router,private activatedroute:ActivatedRoute) { }
  username:String="";
  password:String="";

  ngOnInit(): void {
  }
  authenticate(){
    let user=new User();
    user.username=this.username;
    user.password=this.password;
    this.allService.authenticate(user).subscribe(res=>{
      sessionStorage.setItem('token', res);
      this.router.navigate(['/products'], { relativeTo: this.activatedroute });
    });
    
  }

}

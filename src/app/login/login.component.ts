import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService:AuthService,private router:Router) { }
error:string='';
isLoading=false;
  ngOnInit(): void {
  }
onSubmit(form:NgForm)
{
console.log(form.value)
if(!form.valid)
{
  return;
}
const email=form.value.email;
const password=form.value.password;
this.isLoading=true
this.AuthService.login(email,password).subscribe(
  resData=>{
    console.log(resData);
    this.isLoading=false;
    this.router.navigate(['/home'])
  },errorMessage=>
  {
    console.log(errorMessage);
    this.error=errorMessage;
    this.isLoading=false;
    
  }
);
form.reset();

}
}

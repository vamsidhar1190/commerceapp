import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginform!:FormGroup;
  showMessage: boolean = false;
  loginSuccess: boolean = false;
  userloginSuccess:boolean=false;
  message: string = '';

  constructor( private fb:FormBuilder,private router:Router){}

  ngOnInit() {
    this.loginform=this.fb.group({
      logname:[''],
      logpass:['']
    })    
  }
  
  submit(){
    const enteredName = this.loginform.value.logname;
    const enteredPassword = this.loginform.value.logpass;
    // Perform your login verification logic here
    // For simplicity, let's assume the correct name is "admin" and the correct password is "password"
    if (enteredName === 'Admin' && enteredPassword === 'Admin@123') {
      this.loginSuccess = true;
      this.message = 'Login successful!';
      this.router.navigate(['/test'])
      
    }else if( enteredName==='User' && enteredPassword==='User@123'){
      this.userloginSuccess=true;
      this.message='Login successful';
      this.router.navigate(['/data'])
    } else {
      this.loginSuccess = false;
      this.message = 'Login failed. Please retry.';
    }
    this.showMessage = true;
    this.loginform.reset()
  }

  signup(){
    this.router.navigate(['/signup'])
  }
  
}

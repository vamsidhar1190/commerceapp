import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  
  constructor ( private fb:FormBuilder){ }

  signupform!:FormGroup
  
  ngOnInit() {
    this.signupform=this.fb.group({
      
    })
    
  }
  
  
  

  

}

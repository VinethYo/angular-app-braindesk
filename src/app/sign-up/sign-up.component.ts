import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
import {SignUpService} from './sign-up.service'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupObj:any ={};
  submitted = false;

registerForm?:NgForm;


  constructor(private SignUpService:SignUpService , private router:Router) { }

  ngOnInit(): void {
  }

submit(){
  this.submitted = true;

  console.log(this.signupObj);
  this.SignUpService.addUser(this.signupObj).subscribe(response => {
    console.log(response);
    this.signupObj = {};
    this.router.navigate(['/login'])
  }, error => {
    console.log(error);
    
  })
 }
 
}



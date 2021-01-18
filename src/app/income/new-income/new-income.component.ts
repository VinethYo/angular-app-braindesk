import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NewIncomeService } from './new-income.service';
// import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.css']
})
export class NewIncomeComponent implements OnInit {
  incomeObj :any ={};
  submitted = false;
  id: any;
  registerForm?:NgForm;

  constructor(private NewIncomeService: NewIncomeService,private router: Router, private route: ActivatedRoute) { }
  
  // onSubmit() {
  //   alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //   console.table(this.incomeObj);
  // }
  ngOnInit(): void {
    this.incomeObj = {};
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getById()
    }
  }

  submit() {
this.submitted = true;

  // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  // console.table(this.incomeObj);
// if(ngForm)
    // console.log(this.registerForm.valid)
    if (this.id) {
      this.NewIncomeService.updateIncome(this.id, this.incomeObj).subscribe(response => {
        console.log(response);
        this.incomeObj = {};
        this.router.navigate(['/IncomeComponent'])
      }, error => {
        console.log(error);
      })
    } else {
      console.log(this.incomeObj)
      this.NewIncomeService.addIncome(this.incomeObj).subscribe(response => {
        this.incomeObj = {};
        this.router.navigate(['/IncomeComponent'])
      }, error => {
        console.log(error);
      })
    }
  
  }

  getById() {
    this.NewIncomeService.editIncome(this.id).subscribe(responce => {
      console.log(responce);
      this.incomeObj = responce;
    }, error => {
      console.log(error)
    })

  }

}

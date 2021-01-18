import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenceService } from '../expence.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-expence',
  templateUrl: './add-expence.component.html',
  styleUrls: ['./add-expence.component.css']
})
export class AddExpenceComponent implements OnInit {
expenseObj :any={}
id:any;
submitted = false;

registerForm?:NgForm;

  constructor(private teacherService: ExpenceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.getById()
    }
  }

  submit() {
    this.submitted = true;

    console.log(this.expenseObj)
    if (this.id) {
      this.teacherService.updateExpense(this.id, this.expenseObj).subscribe(response => {
        console.log(response);
        this.expenseObj = {};
        this.router.navigate(['/ExpenceComponent'])
      }, error => {
        console.log(error);
      })
    } else {
      this.teacherService.addExpense(this.expenseObj).subscribe(response => {
        console.log(response);
        this.expenseObj = {};
        this.router.navigate(['/ExpenceComponent'])
      }, error => {
        console.log(error);
      })
    }

  }

  getById() {
    this.teacherService.editExpense(this.id).subscribe(responce => {
      console.log(responce);
      this.expenseObj = responce;
    }, error => {
      console.log(error)
    })

  }

}
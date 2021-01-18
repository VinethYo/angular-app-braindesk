import { Component, OnInit } from '@angular/core';
import { ExpenceService } from './expence.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-expence',
  templateUrl: './expence.component.html',
  styleUrls: ['./expence.component.css']
})
export class ExpenceComponent implements OnInit {
expenseArr :any=[];
  constructor(private ExpenceService:ExpenceService ,  private router:Router) { }

  ngOnInit(): void {
    this.getExpense()
  }
getExpense(){
  this.ExpenceService.getExpense().subscribe(response =>{
    console.log(response)
    this.expenseArr = response;
  },error =>{
  console.log(error);
  })
}

edit(id:any){
this.router.navigate(['/AddExpenceComponent' + '/' + id])
}

delete(id:any ){
  this.ExpenceService.deleteExpense(id).subscribe(response =>{
    console.log(response);
    this.getExpense()
  })
  console.log();
}
}
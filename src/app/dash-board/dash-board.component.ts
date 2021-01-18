import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result/result.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  incomeArr: any = []
  expenseArr: any = []
  // reportArr :any =[]
  total = 0;
  totall = 0;
  totalll = 0;
  isProfit =false;
  // cashinhand :any;y
  constructor(private ResultService: ResultService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getincome()
    this.getExpense()
    this.cash()
  }
  getincome() {
    this.ResultService.getIncome().subscribe(response => {
      console.log(response)
      this.incomeArr = response;
      this.sum()
      // this.push();
    }, error => {
      console.log(error);
    })
  }
  getExpense() {
    this.ResultService.getExpense().subscribe(response => {
      console.log(response)
      this.expenseArr = response;
      this.sumb()
      // this.push();

    }, error => {
      console.log(error);
    })
  }
  sum() {

    for (let i = 0; i < this.incomeArr.length; i++) {
      this.total = Number(this.incomeArr[i].Amount + this.total);
      
      this.cash();

    }
    console.log(this.total)
  }
  sumb() {

    for (let i = 0; i < this.expenseArr.length; i++) {
      this.totall = Number(this.expenseArr[i].Amountt + this.totall);
      this.cash();
    }
    console.log(this.totall)
  }
  cash() {
    // this.isProfit =true;

    this.totalll = this.total - this.totall ;
    console.log(this.totall);
  }
}




import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-resultlist',
  templateUrl: './resultlist.component.html',
  styleUrls: ['./resultlist.component.css']
})
export class ResultlistComponent implements OnInit {
  date: any = {};

  incomeArr: any = []
  expenseArr: any = []
  incomeArray: any = []
  expenseArray: any = []

  total = 0;
  totall = 0;
  totalll = 0;

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
      this.submit()
    
      this.sum()
     
    }, error => {
      console.log(error);
    })
  }
  getExpense() {
    this.ResultService.getExpense().subscribe(response => {
      console.log(response)
      this.expenseArr = response;
   
      this.sumb()
   

    }, error => {
      console.log(error);
    })
  }
  submit(){
      this.incomeArray =[];    
         this.expenseArray = []
    console.log(this.incomeArr)
    console.log(this.expenseArr)
    for (let i = 0; i < this.expenseArr.length; i++) {
      if (this.expenseArr[i].Date >= this.date.fromDate && this.expenseArr[i].Date <= this.date.toDate) {
        this.expenseArray.push(this.expenseArr[i])
        console.log(this.expenseArray)
        }
    }
    for (let i = 0; i < this.incomeArr.length; i++) {
      if (this.incomeArr[i].Date >= this.date.fromDate && this.incomeArr[i].Date <= this.date.toDate) {
        this.incomeArray.push(this.incomeArr[i])
        console.log(this.incomeArray)
      }
    }
       this.date = {};
    this.sum()
    this.sumb()
  }

  sum() {
    this.total= 0;

    for (let i = 0; i < this.incomeArray.length; i++) {
      this.total = Number(this.incomeArray[i].Amount + this.total);
      
      this.cash();

    }
    console.log(this.total)
 

  }
  sumb() {
this.totall = 0;

    for (let i = 0; i < this.expenseArray.length; i++) {
      this.totall = Number(this.expenseArray[i].Amountt + this.totall);
      this.cash();
    }
    console.log(this.totall)
  

  }
  
  cash() {
    this.totalll = this.total - this.totall ;
    console.log(this.totall);
  }


}



import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router'
import { NewIncomeService } from './new-income/new-income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomeArr :any =[];
id:any;
  constructor(
    private teacherService:NewIncomeService ,
      private router:Router, private route: ActivatedRoute) { }

      ngOnInit(): void {
        this.getincome();
      }
    getincome(){
      this.teacherService.getIncome().subscribe(response =>{
        console.log(response)
        this.incomeArr = response;
      },error =>{
      console.log(error);
      })
    }
    
    edit(id:any){
    this.router.navigate(['/NewIncomeComponent' + '/' + id])
    }
    delete(id:any ){
      this.teacherService.deleteIncome(id).subscribe(response =>{
        console.log(response);
        this.getincome()
      })
      console.log();
    }
    }
    
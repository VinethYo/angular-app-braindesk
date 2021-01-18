import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { IncomeComponent } from './income/income.component';
import { NewIncomeComponent } from './income/new-income/new-income.component';
import { ExpenceComponent } from './expence/expence.component';
import { AddExpenceComponent } from './expence/add-expence/add-expence.component';
import { CategoryComponent } from './category/category.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { ResultComponent } from './result/result.component';
import { ResultlistComponent } from './result/resultlist/resultlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    DashBoardComponent,
    IncomeComponent,
    NewIncomeComponent,
    ExpenceComponent,
    AddExpenceComponent,
    CategoryComponent,
    NewCategoryComponent,
    ResultComponent,
    ResultlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewIncomeComponent } from './income/new-income/new-income.component';
import { IncomeComponent } from './income/income.component';
import { ExpenceComponent } from './expence/expence.component';
import { AddExpenceComponent } from './expence/add-expence/add-expence.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CategoryComponent } from './category/category.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { ResultComponent } from './result/result.component';
import { ResultlistComponent } from './result/resultlist/resultlist.component';

const routes: Routes = [
  {
    path:'login',
    component:LogInComponent,

  },
  {
    path:'DashBoardComponent',
    component:DashBoardComponent,

  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'IncomeComponent',
    component:IncomeComponent
  },
  {
    path:'NewIncomeComponent',
    component:NewIncomeComponent
  },
  {
    path:'NewIncomeComponent/:id',
    component:NewIncomeComponent
  }, {
    path:'ExpenceComponent',
    component:ExpenceComponent
  },
  {
    path:'AddExpenceComponent',
    component:AddExpenceComponent
  },
  {
    path:'AddExpenceComponent/:id',
    component:AddExpenceComponent
  },
  {
    path:'CategoryComponent',
    component:CategoryComponent
  },
  {
    path:'NewCategoryComponent/:id',
    component:NewCategoryComponent
  },
  {
    path:'NewCategoryComponent',
    component:NewCategoryComponent
  },
  {
    path:'ResultComponent',
    component:ResultComponent
  },
  {
    path:'ResultlistComponent',
    component:ResultlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

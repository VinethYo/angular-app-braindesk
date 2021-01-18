import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryArr :any =[];
  constructor(private CategoryService:CategoryService ,  private router:Router) { }

  ngOnInit(): void {
    this.getTeacher();
  }
getTeacher(){
  this.CategoryService.getCategory().subscribe(response =>{
    console.log(response)
    this.categoryArr = response;
  },error =>{
  console.log(error);
  })
}

edit(id:any){
this.router.navigate(['/NewCategoryComponent' + '/' + id])
}
delete(id:any ){
  this.CategoryService.deleteCategory(id).subscribe(response =>{
    console.log(response);
    this.getTeacher()
  })
  console.log();
}
}


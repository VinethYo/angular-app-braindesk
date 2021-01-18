import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  categoryObj :any = {};
  id: any;
  submitted = false;

  registerForm?:NgForm;
  constructor(private CategoryService: CategoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.getById()
    }
  }

  submit() {
    this.submitted = true;

    console.log(this.categoryObj)
    if (this.id) {
      this.CategoryService.updateCategory(this.id, this.categoryObj).subscribe(response => {
        console.log(response);
        this.categoryObj = {};
        this.router.navigate(['/CategoryComponent'])
      }, error => {
        console.log(error);
      })
    } else {
      this.CategoryService.addCategory(this.categoryObj).subscribe(response => {
        console.log(response);
        this.categoryObj = {};
        this.router.navigate(['/CategoryComponent'])
      }, error => {
        console.log(error);
      })
    }

  }

  getById() {
    this.CategoryService.getById(this.id).subscribe(responce => {
      console.log(responce);
      this.categoryObj = responce;
    }, error => {
      console.log(error)
    })

  }

}

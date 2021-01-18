import { Component, OnInit } from '@angular/core';
import { LogInService } from './log-in.service';
import { ActivatedRoute, Router } from '@angular/router'
import { CompileShallowModuleMetadata } from '@angular/compiler';
// import { Console } from 'console';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  signupObj: any = {};
  signupArr: any = [];

  constructor(private LogInService: LogInService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser()

  }
  login() {

    console.log(this.signupObj)

    let val = this.signupArr.find((e: any) => e.username == this.signupObj.username && e.password == this.signupObj.password);
    console.log(val);
    if (val) {
      this.router.navigate(['/DashBoardComponent'])
    } else {
      alert("Username or Password is incorrect")
    }
  }
  getUser() {
    this.LogInService.getUser().subscribe(response => {
      console.log(response);
      this.signupArr = response;
    }, error => {
      console.log(error);
    })
  }

}

import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    ebrain = false;
    title = 'app';
    constructor(private router: Router, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    console.log('NavigationEnd:', event);
                    if (event.url == "/DashBoardComponent") {
                        this.ebrain = true;
                    } else if (event.url == "/CategoryComponent") {
                        this.ebrain = true;
                    } else if (event.url == "/ExpenceComponent") {
                        this.ebrain = true;
                    } else if (event.url == "/IncomeComponent") {
                        this.ebrain = true;
                    } else if (event.url == "/ResultlistComponent") {
                        this.ebrain = true;
                    } else if (event.url == "/NewIncomeComponent") {
                        this.ebrain = true;
                    } else if (event.url == "/AddExpenceComponent") {
                        this.ebrain = true;
                    } else if (event.url == "/NewCategoryComponent") {
                        this.ebrain = true;
                    }
                    else {
                        this.ebrain = false;
                    }
                }
            });
    }
}
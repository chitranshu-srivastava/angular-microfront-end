import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pageTitle: string = 'Landing Page';
  pageName: string = 'Home';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      const pageN = param.pageName;
      const pageT = param.pageTitle;
      if (pageN) {
        this.pageName = pageN.charAt(0).toUpperCase() + pageN.slice(1);
      }
      if (pageT) {
        this.pageTitle = pageT.charAt(0).toUpperCase() + pageT.slice(1);
      }
    });
  }
}

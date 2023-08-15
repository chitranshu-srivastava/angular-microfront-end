import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BossHeader';
  isActive: boolean = false;
  isLoggedOut: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.isLoggedOut = event.url.slice(1) === 'logout' ? true : false;
      }
    });
  }

  toggleSideBar() {
    this.isActive = !this.isActive;
  }
  redirectToProfile() {
    this.router.navigate(['/profile']);
  }
}

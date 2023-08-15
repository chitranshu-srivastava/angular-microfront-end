import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isActive: boolean = false;
  constructor(private router: Router) {}
  toggleSideBar() {
    this.isActive = !this.isActive;
  }
  redirectToProfile() {
    this.router.navigate(['/profile']);
  }
}

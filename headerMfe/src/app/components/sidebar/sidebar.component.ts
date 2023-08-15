import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isActive: boolean = false;
  showSubMenus: boolean = false;

  constructor(private router: Router, private el: ElementRef) {}
  ngOnInit(): void {}

  toggleSideBar() {
    if (this.showSubMenus) {
      this.isActive = true;
    } else {
      this.isActive = !this.isActive;
    }
    this.showSubMenus = false;
    this.closeSubMenus();
  }
  redirect(path: string) {
    this.router.navigate([`/${path}`]);
  }
  toggleDropdown() {
    if (this.showSubMenus) {
      this.showSubMenus = false;
    } else {
      this.showSubMenus = this.isActive ? true : false;
    }
  }
  subMenuClicked(path: string) {
    this.showSubMenus = false;

    // Close the all the opened submenus if sidebar is in opened state
    if (this.isActive) {
      this.closeSubMenus();
    }

    this.redirect(path);
  }

  closeSubMenus() {
    const misc = this.el.nativeElement.querySelector('#misc');
    const admin = this.el.nativeElement.querySelector('#admin');
    const security = this.el.nativeElement.querySelector('#security');
    misc.classList.remove('show');
    admin.classList.remove('show');
    security.classList.remove('show');
  }
}

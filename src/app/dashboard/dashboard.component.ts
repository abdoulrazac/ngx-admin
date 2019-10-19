import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isSidenavOpen = true;
  isSidenavFixed = false;
  static path = () => ['dashboard'];

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth < 860) {
      this.isSidenavOpen = false;
      this.isSidenavFixed = true;
    } else {
      this.isSidenavOpen = true;
      this.isSidenavFixed = false;
    }
  }

  constructor(
    private elementRef: ElementRef,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }

  toggleFullscreen() {
    const elem = this.elementRef.nativeElement.querySelector('.dashboard');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  onToggeleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}

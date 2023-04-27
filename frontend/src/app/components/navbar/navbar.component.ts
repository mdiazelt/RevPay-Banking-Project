import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUserRole: string | null;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

  }
  get loggedIn() {
    return this.authService.loggedIn;
  }
  get showPersonalAccountLink() {
    return this.loggedIn && this.currentUserRole === 'personal';
  }

  get showBusinessAccountLink() {
    return this.loggedIn && this.currentUserRole === 'business';
  }

  loggedOut() {
    this.authService.logout()
  }
}

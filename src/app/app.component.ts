import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout()
  }
}
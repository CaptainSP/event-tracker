import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../common/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CookieService],
})
export class AppComponent implements OnInit {
  title = 'event-tracker';

  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    this.authService.init();
  }
}

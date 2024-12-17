import { Component } from '@angular/core';
import { MainContentComponent } from "../../common/ui/main-content/main-content.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../common/auth.service';

@Component({
    selector: 'app-login',
    imports: [MainContentComponent, RouterModule],
    templateUrl: './login.component.html',
    standalone: true,
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private activatedRoute:ActivatedRoute,
    private authService:AuthService,
    private router:Router,
  ) {}

  ngOnInit() {
    console.log('LoginComponent initialized');
    const token = this.activatedRoute.snapshot.queryParams['token'];
    if (token) {
      this.authService.login(token);
      this.router.navigate(['/']);
    }
  }
}
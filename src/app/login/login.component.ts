import { Component } from '@angular/core';
import { MainContentComponent } from "../../common/ui/main-content/main-content.component";
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MainContentComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('LoginComponent initialized');
    const token = this.activatedRoute.snapshot.queryParams['token'];
    if (token) {
      
    }
  }
}

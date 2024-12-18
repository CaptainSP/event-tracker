import { Component, OnInit } from '@angular/core';
import { MainContentComponent } from '../../common/ui/main-content/main-content.component';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AuthService } from '../../common/auth.service';


@Component({
  selector: 'app-settings',
  imports: [MainContentComponent, ReactiveFormsModule,FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  constructor(public http: HttpClient, private authService:AuthService) {}

  public settingsText = '';
  ngOnInit(): void {
    this.http.get('http://localhost:3000/settings', {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    }).subscribe((data: any) => {
      this.settingsText = data[2];
    });
  }

  submitText() {
    this.http.post('http://localhost:3000/settings', { settings: this.settingsText }, {
      headers: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    }).subscribe((data: any) => {
      console.log(data);
    });
  }
}

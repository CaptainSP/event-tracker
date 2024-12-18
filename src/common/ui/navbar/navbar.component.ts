import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule,Settings } from 'lucide-angular';


@Component({
    selector: 'app-navbar',
    imports: [LucideAngularModule,RouterModule],
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    readonly SettingsIcon = Settings;

}

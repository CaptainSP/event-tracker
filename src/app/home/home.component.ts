import { Component } from '@angular/core';
import { NavbarComponent } from "../../common/ui/navbar/navbar.component";
import { MainContentComponent } from "../../common/ui/main-content/main-content.component";
import { EventCardComponent } from "../../common/ui/event-card/event-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainContentComponent, EventCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

}

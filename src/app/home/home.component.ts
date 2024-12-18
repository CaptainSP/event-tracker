import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../common/ui/navbar/navbar.component';
import { MainContentComponent } from '../../common/ui/main-content/main-content.component';
import { EventCardComponent } from '../../common/ui/event-card/event-card.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainContentComponent, EventCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private authService: AuthService) {}

  public backgroundColors = [
    {
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      color: 'black',
    },
    {
      background : 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
      color: 'black',
    },
    {
      background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
      color: 'black',
    },
    {
      background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
      color: 'black',
    },
    {
      background: 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)',
      color: 'black',
    },
    {
      background: 'linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%)',
      color: 'black',
    },
    {
      background: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
      color: 'black',
    },
    {
      background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
      color: 'black',
    },
    {
      background: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
      color: 'black',
    },
    {
      background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
      color: 'black',
    }
  ]

  public tags: any[] = [];
  public events: any[] = [];
  public filteredEvents: any[] = [];
  public loading = true;

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/events', {
        headers: {
          Authorization: `Bearer ${this.authService.getToken()}`,
        },
      })
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.events = data.map((item: any) => {
            const event = item['event'];
            const tags = item['tags']
            return {
              id: event[0],
              title: event[1],
              summary: event[2],
              location: event[3],
              startDate: event[4],
              endDate: event[5],
              priority: event[6],
              imageUrl: event[7],
              background: this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)],
              tags: tags.map((tag: any) => {
                return {
                  id: tag[0],
                  name: tag[1],
                };
              })
            };
          });
          this.filteredEvents = this.events;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
        },
      });
    this.http
      .get('http://localhost:3000/tags', {
        headers: {
          Authorization: `Bearer ${this.authService.getToken()}`,
        },
      })
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.tags = data.map((item: any) => {
            return {
              id: item[0],
              name: item[1],
              selected : false
            };
          });
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  public selectTag(tag: any) {
    tag.selected = !tag.selected;
    this.filteredEvents = this.events.filter((event) => {
      const filterByTag = this.tags.filter((tag) => tag.selected).map((tag) => tag.id);
      if (filterByTag.length === 0) {
        return true;
      }
      return event.tags.some((tag:any) => filterByTag.includes(tag.id));
    });
  }
}

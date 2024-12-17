import { Component, Input } from '@angular/core';
import { ParseDatePipe } from './parse-date.pipe';

@Component({
    selector: 'app-event-card',
    imports: [ParseDatePipe],
    templateUrl: './event-card.component.html',
    styleUrl: './event-card.component.scss',
    standalone: true
})
export class EventCardComponent {

    @Input() event: any;

}

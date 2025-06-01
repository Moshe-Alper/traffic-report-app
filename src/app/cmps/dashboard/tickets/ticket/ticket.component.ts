import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../../models/ticket.model';

@Component({
  selector: 'ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>() 
  close = output()
  detailsVisible = signal(false)

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible)
  }

  onMarkAsCompleted() {
    this.close.emit()
  }
}

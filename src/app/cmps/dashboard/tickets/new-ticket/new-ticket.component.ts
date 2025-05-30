import { Component } from '@angular/core';
import { AppButtonComponent } from '../../../../shared/app-button/app-button.component';
import { ControlComponent } from "../../../../shared/control/control/control.component";

@Component({
  selector: 'new-ticket',
  standalone: true,
  imports: [AppButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}

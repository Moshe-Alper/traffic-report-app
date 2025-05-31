import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppButtonComponent } from '../../../../shared/app-button/app-button.component';
import { ControlComponent } from "../../../../shared/control/control/control.component";

@Component({
  selector: 'new-ticket',
  standalone: true,
  imports: [AppButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>

  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText)
    this.form?.nativeElement.reset()
  }
}

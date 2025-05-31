import { AfterViewInit, Component, ElementRef, OnInit, viewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  ngOnInit() {
    console.log('On Init')
    console.log(this.form().nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('After View Init')
    console.log(this.form().nativeElement)
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText)
    this.form().nativeElement.reset()
  }
}

import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild } from '@angular/core';
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
  // @Output() add = new EventEmitter()
  enteredTitle = ''
  enteredText = ''
  add = output<{title: string; text: string}>()

  ngOnInit() {
    console.log('On Init')
    console.log(this.form().nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('After View Init')
    console.log(this.form().nativeElement)
  }

  onSubmit() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    this.enteredTitle = ''
    this.enteredText = ''
  }
}

import { Component } from '@angular/core';
import { AppButtonComponent } from "../../shared/app-button/app-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {

}

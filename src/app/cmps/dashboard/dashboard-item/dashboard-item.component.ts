import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  image = input.required<{ src: string; alt: string }>()
  title = input.required<string>()
}

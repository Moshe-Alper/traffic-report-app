import { Component } from '@angular/core';
import { AppHeaderComponent } from "./cmps/app-header/app-header.component";
import { ServerStatusComponent } from "./cmps/dashboard/server-status/server-status.component";
import { TrafficComponent } from "./cmps/dashboard/traffic/traffic.component";
import { TicketsComponent } from "./cmps/dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./cmps/dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AppHeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class AppComponent {
 
}

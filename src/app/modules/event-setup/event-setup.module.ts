import { NgModule } from '@angular/core';
import { CreateNewEventComponent } from './pages/create-new-event/create-new-event.component';
import { EventSetupRoutes } from './event-setup.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const PAGES = [CreateNewEventComponent];

@NgModule({
  imports: [CommonModule, FormsModule, EventSetupRoutes],
  declarations: [...PAGES],
})
export class EventSetupModule {}

import { Component } from '@angular/core';
import {DataServiceService} from "./data-service.service";

@Component({
  selector: 'app-root',
  template: `<app-data-driven></app-data-driven>`,

  providers: [DataServiceService]
})
export class AppComponent {
  title = 'app';
}

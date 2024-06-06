import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,C1Component,C2Component],
  template: `
  <h1>StandAlone</h1>
  <router-outlet></router-outlet>
 
 
  `
})
export class AppComponent {
  title = 'stand-alone-app';
}

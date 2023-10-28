import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-about></app-about>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'portfolio';
}

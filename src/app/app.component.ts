import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="navbar">
      <app-navbar></app-navbar>
    </div>
    <div id="home">
      <app-home></app-home>
    </div>
    <div id="about">
      <app-about></app-about>
    </div>
    <div id="skills">
      <app-skills></app-skills>
    </div>
    <div id="projects">
      <app-projects></app-projects>
    </div>
    <div id="footer">
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {}

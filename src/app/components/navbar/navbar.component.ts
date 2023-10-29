import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="nav" style="background-color: black; color: white; height: 50px;">
      <div class="container-sm d-flex align-items-center">
        <div id="name" class="nav-item" style="padding-right: 0;">Umut Sobe</div>
        <div class="d-flex mx-auto justify-content-center align-items-center">
          <div class="nav-item" (click)="goAbout()">About</div>
          <div class="nav-item" (click)="goSkills()">Skills</div>
          <div class="nav-item" (click)="goProjects()">Projects</div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .nav-item {
        padding: 8px;
        cursor: pointer;
        margin-right: 2px;
        font-size: 18px;
        font-weight: 500;
      }
      .nav-item:hover {
        color: #ffa33c;
      }
      @media (max-width: 600px) {
        .nav-item {
          padding: 3px;
          cursor: pointer;
          margin-right: 1px;
          font-size: 16px;
          font-weight: 500;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  goAbout() {
    const section = document.getElementById('about');
    section.scrollIntoView();
  }
  goSkills() {
    const section = document.getElementById('skills');
    section.scrollIntoView();
  }
  goProjects() {
    const section = document.getElementById('projects');
    section.scrollIntoView();
  }
}

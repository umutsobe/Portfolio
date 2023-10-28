import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="nav" style="background-color: #3D30A2; color: white;">
      <div class="container-sm d-flex align-items-center">
        <div class="nav-item" style="padding-right: 0;">Umut Sobe</div>
        <div class="d-flex mx-auto justify-content-center align-items-center">
          <div class="nav-item" style="">Home</div>
          <div class="nav-item">About</div>
          <div class="nav-item">Skills</div>
          <div class="nav-item">Projects</div>
          <div class="nav-item">Contact</div>
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
        font-size: 20px;
        font-weight: 500;
      }
      .nav-item:hover {
        color: #ffa33c;
      }
    `,
  ],
})
export class NavbarComponent {}

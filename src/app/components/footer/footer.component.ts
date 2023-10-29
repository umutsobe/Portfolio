import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div style="background-color: #252b3b;">
      <div class="d-flex justify-content-between align-items-center p-3">
        <div class="text-white ps-5">{{ year }} - Umut Sobe</div>
        <div (click)="scroolToTop()" role="button" class="d-flex pe-5"><img style="width: 40px;" src="/assets/top.png" alt="" /></div>
      </div>
    </div>
  `,
})
export class FooterComponent {
  year: number;
  constructor() {
    const currentDate = new Date();
    this.year = currentDate.getFullYear();
  }
  scroolToTop() {
    window.scroll(0, 0);
  }
}

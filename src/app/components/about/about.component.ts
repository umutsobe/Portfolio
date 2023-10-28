import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="py-5" style="background-color: #F4BF96;">
      <div class="d-flex justify-content-center">
        <div class="d-flex justify-content-center align-items-center col-12 col-md-10 col-lg-8">
          <div class="p-2">
            <img class="rounded-3" width="300" src="/assets/my.jpg" />
          </div>
          <div class="p-2 fw-bold" style="color: black;">I am Umut Söbe. I am studying computer engineering at Süleyman Demirel University in Turkey. I am focusing on improving my skills in the field of web development.</div>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}

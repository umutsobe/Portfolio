import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="py-2" style="background-color: #F4BF96;">
      <div class="d-flex flex-column align-items-center">
        <img class="image rounded-3" style="width: 300px;" src="/assets/my.jpg" />
        <div class="col-10 col-md-6 col-lg-4 p-2 fw-bold" style="color: black;">I'm Umut Söbe. I'm studying computer engineering at Süleyman Demirel University in Turkey. I'm focusing on improving my skills in the field of web development.</div>
      </div>
    </div>
  `,
})
export class AboutComponent {}

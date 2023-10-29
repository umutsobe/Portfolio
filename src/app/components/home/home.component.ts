import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="p-2" style="height: 99vh !important; background-color: #090f21;">
      <div class="h-75 d-flex flex-column justify-content-center align-items-center ">
        <div class="typewriter mx-auto">
          <p class="welcome-text" id="demo"></p>
        </div>
        <div class="p-3 rounded-3" style="margin-top: 120px;">
          <div class="p-2">
            <h2 class="text-white text-center">Contact</h2>
            <div class="d-flex flex-wrap justify-content-center">
              <a target="_blank" href="https://github.com/umutsobe">
                <button class="contact-item btn p-2 m-1" style="background-color: black; color: white; width: 80px;">Github</button>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/umut-s%C3%B6be-a492ba21a/">
                <button class="contact-item btn p-2 m-1" style="background-color: #0274b3; color: white;width: 80px;">Linkedin</button>
              </a>
              <a target="_blank" href="https://medium.com/@umutsobe">
                <button class="contact-item btn p-2 m-1" style="background-color: #FF7676; color: white;width: 80px;">Medium</button>
              </a>
              <a target="_blank" href="mailto:umutsobee@gmail.com">
                <button class="contact-item btn p-2 m-1" style="background-color: red; color: white;width: 80px;">Gmail</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .welcome-text {
        color: white;
        font-size: 28px;
        font-weight: 600;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: 0.15em;
      }
      @media (max-width: 600px) {
        .welcome-text {
          font-size: 15px;
        }
        .contact-item {
        }
      }
      @media (max-width: 340px) {
        .welcome-text {
          font-size: 12px;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  txt = "Hello. I'm Umut Sobe. Welcome!";
  speed = 70;
  i = 0;
  timerId: any;

  ngOnInit() {
    this.startAnimation();
  }

  typeWriter() {
    if (this.i < this.txt.length) {
      document.getElementById('demo').innerHTML += this.txt.charAt(this.i);
      this.i++;
      this.timerId = setTimeout(() => this.typeWriter(), this.speed);
    }
  }

  startAnimation() {
    if (this.timerId) return;
    this.typeWriter();
  }
}

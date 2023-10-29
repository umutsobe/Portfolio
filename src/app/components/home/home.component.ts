import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div style="height: 90vh !important; background-color: #072541;">
      <div class="h-75 d-flex flex-column justify-content-center align-items-center ">
        <div class="typewriter mx-auto">
          <h1>Hello. I'm Umut Sobe. Welcome!</h1>
        </div>
        <div class="p-3 border rounded-3" style="margin-top: 120px;">
          <h2 class="text-white text-center">Contact</h2>
          <div class="d-flex">
            <a target="_blank" href="https://github.com/umutsobe">
              <button class="btn p-2 m-1" style="background-color: black; color: white; width: 80px;">Github</button>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/umut-s%C3%B6be-a492ba21a/">
              <button class="btn p-2 m-1" style="background-color: #0274b3; color: white;width: 80px;">Linkedin</button>
            </a>
            <a target="_blank" href="https://medium.com/@umutsobe">
              <button class="btn p-2 m-1" style="background-color: #FF7676; color: white;width: 80px;">Medium</button>
            </a>
            <a target="_blank" href="mailto:umutsobee@gmail.com">
              <button class="btn p-2 m-1" style="background-color: red; color: white;width: 80px;">Gmail</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .typewriter h1 {
        color: #fff;
        overflow: hidden;
        border-right: 0.15em solid orange;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: 0.15em;
        animation: typing 3.5s steps(20, end), blink-caret 0.5s step-end infinite;
      }

      /* The typing effect */
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }

      @keyframes blink-caret {
        from,
        to {
          border-color: transparent;
        }
        50% {
          border-color: orange;
        }
      }
    `,
  ],
})
export class HomeComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="p-2" style="height: 90vh !important; background-color: #090f21;">
      <div class="h-75 d-flex flex-column justify-content-center align-items-center ">
        <div class="typewriter mx-auto">
          <div class="welcome-text user-select-none text-white">Hello. I'm Umut Sobe. Welcome!</div>
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
        overflow: hidden;
        font-size: 25px;
        font-weight: 500;
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
export class HomeComponent {}

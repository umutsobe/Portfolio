import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div style="height: 90vh !important; background-color: #072541; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
      <div class="h-75 d-flex justify-content-center align-items-center ">
        <div class="typewriter mx-auto">
          <h1>Hello. I'm Umut Sobe. Welcome!</h1>
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

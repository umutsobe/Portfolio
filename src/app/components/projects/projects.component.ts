import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div class="bg-dark py-4 ">
      <div class="row m-0">
        <div class="col-12 col-md-12 col-lg-8">
          <div class="large d-flex flex-column align-items-center border-end">
            <h3 class="text-white m-0 border-bottom">Large Scale Projects</h3>
            <div class="p-3 mt-3">
              <a target="_blank" href="http://ecommercesobe.online/" style="width: fit-content;">
                <h4 class="text-center" style="color: aqua;">E Commerce App</h4>
              </a>
              <div class="d-flex justify-content-center">
                <img class="e-commerce-image rounded-3" style="width: 500px;" src="/assets/e_commerce.jpg" />
              </div>
              <div class="d-flex justify-content-sm-start flex-wrap mt-3 w-100">
                <ul class="p-4">
                  <h5 class="text-white text-center">Technologies</h5>

                  <li>ASP.NET Core 7 Web API</li>
                  <li>Angular 16</li>
                  <li>ASP.NET Identity</li>
                  <li>JWT Authentication</li>
                  <li>Refresh Token</li>
                  <li>SignalR</li>
                  <li>Entity Framework Core</li>
                  <li>FluentValidatiton</li>
                </ul>
                <ul class="p-4">
                  <h5 class="text-white text-center">Architecture</h5>

                  <li>Onion Architecture</li>
                  <li>CQRS Pattern</li>
                  <li>Repository Pattern</li>
                  <li>MediatR</li>
                </ul>
                <ul class="p-4">
                  <h5 class="text-white text-center">Hosting</h5>

                  <li>DigitalOcean Machine (now hosting)</li>
                  <li>Docker</li>
                  <li>Jenkins</li>
                  <li>Azure (before Docker)</li>
                  <li>Heroku (before Docker)</li>
                </ul>
                <ul class="p-4">
                  <h5 class="text-white text-center">Other Technologies</h5>

                  <li>Multiple Role Management</li>
                  <li>Mail Service</li>
                  <li>Google Login</li>
                  <li>Azure Blob Storage</li>
                </ul>
              </div>
              <div class="d-flex justify-content-center">
                <a target="_blank" href="http://ecommercesobe.online/">
                  <button class="btn btn-warning btn-lg ">Visit</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-4">
          <div class="d-flex flex-column align-items-center">
            <h4 class="text-white border-bottom mb-5">Small and Medium Sized Projects</h4>
            <div class="d-flex flex-column justify-content-center mb-4">
              <h5 class="text-white text-center my-2">Music Player</h5>
              <div class="d-flex justify-content-between align-items-center">
                <img class="rounded-3 small-image" style="width: 220px;" src="/assets/music.jpg" alt="" />
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center">
              <h5 class="text-white text-center my-2">Quiz App</h5>

              <div class="d-flex justify-content-between align-items-center">
                <img class="rounded-3 small-image" style="width: 220px;" src="/assets/quiz.png" alt="" />
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      ul li {
        color: white;
      }
      @media (max-width: 600px) {
        .e-commerce-image {
          width: 350px !important;
        }
        .large {
          border: 0 !important;
        }
        ul {
          width: 100%;
        }
      }
      @media (max-width: 400px) {
        .e-commerce-image {
          width: 280px !important;
        }
      }
      @media (max-width: 300px) {
        .e-commerce-image {
          width: 200px !important;
        }
      }
      @media (max-width: 400px) {
        .small-image {
          width: 150px !important;
        }
      }
    `,
  ],
})
export class ProjectsComponent {}

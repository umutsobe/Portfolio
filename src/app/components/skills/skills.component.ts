import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div class="skills py-5" style="background-color: #1F1717;">
      <h2 class="text-white text-center mb-4">The technologies I have used in my projects:</h2>

      <div class="d-flex justify-content-between align-items-center">
        <div class="wrapper flex-wrap">
          <div class="card">
            <img src="/assets/aspnet.png" />
          </div>
          <div class="card">
            <img src="/assets/angular.jpg" style="object-fit: ;" />
          </div>
          <div class="card">
            <img src="/assets/csharp.png" />
          </div>
          <div class="card">
            <img src="/assets/docker.png" />
          </div>
          <div class="card">
            <img src="/assets/azure.png" />
          </div>
          <div class="card">
            <img src="/assets/efcore.png" />
          </div>
          <div class="card">
            <img src="/assets/git.jpg" />
          </div>
          <div class="card">
            <img src="/assets/jenkins.jpg" />
          </div>
          <div class="card">
            <img src="/assets/linux.jpg" />
          </div>
          <div class="card">
            <img src="/assets/typescript.png" />
          </div>
          <div class="card">
            <img src="/assets/js.png" />
          </div>
          <div class="card">
            <img src="/assets/bootstrap.jpg" />
          </div>
          <div class="card">
            <img src="/assets/css.png" />
          </div>
          <div class="card">
            <img src="/assets/html.png" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      .card {
        width: 200px;
        height: 200px;
        border-radius: 15px;
        padding: 1.5rem;
        margin-bottom: 25px;
        margin-right: 10px;
        background: black;
        position: relative;
        display: flex;
        align-items: flex-end;
        transition: 0.4s ease-out;
        box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
        cursor: context-menu;
      }

      .card:hover {
        transform: translateY(20px);
      }

      .card:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background: rgba(0, 0, 0, 0.6);
        z-index: 2;
        transition: 0.5s;
        opacity: 0;
      }

      .card:hover:before {
        opacity: 1;
      }

      .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 15px;
      }
    `,
  ],
})
export class SkillsComponent {}

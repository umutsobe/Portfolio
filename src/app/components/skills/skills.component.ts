import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div class="skills py-5" style="background-color: #1F1717;">
      <h2 class="text-white text-center mb-4">The technologies I have used in my projects:</h2>

      <div class="d-flex justify-content-between align-items-center">
        <div class="wrapper flex-wrap">
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="aspnet" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="angular" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="csharp" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="docker" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="azure" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="efcore" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="git" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="jenkins" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="linux" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="typescript" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="js" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="bootstrap" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="primeng" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="css" />
          </div>
          <div class="card">
            <img [defaultImage]="default" [lazyLoad]="html" />
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
        width: 160px;
        height: 160px;
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
        content: ;
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
      @media (max-width: 600px) {
        .card {
          width: 90px;
          height: 90px;
        }
      }
    `,
  ],
})
export class SkillsComponent {
  default = '/assets/dark-preload.png';

  html = '/assets/html.png';
  aspnet = '/assets/aspnet.png';
  angular = '/assets/angular.jpg';
  csharp = '/assets/csharp.png';
  docker = '/assets/docker.png';
  azure = '/assets/azure.png';
  efcore = '/assets/efcore.png';
  git = '/assets/git.jpg';
  jenkins = '/assets/jenkins.jpg';
  linux = '/assets/linux.jpg';
  typescript = '/assets/typescript.png';
  js = '/assets/js.png';
  bootstrap = '/assets/bootstrap.jpg';
  primeng = '/assets/prime-ng.png';
  css = '/assets/css.png';
}

import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {SuggestionsView } from './components/suggestions/suggestions.component';
import { ProjectsComponent }     from './components/projects/projects.component';


@Component({
  selector: 'my-app',
  providers: [ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  template: `<section class="hero jumbotron text-xs-center">
    <div class="container">
      <h1 class="jumbotron-heading">Featured Work Explorer</h1>
      <p class="lead">This is web based application for my portfolio. Here you can filter projects by technology used. You can also express that you like a project by using the like button and suggest new projects on the project suggestion page</p>
      <p>
        <a [routerLink]="['Suggestions']" class="btn btn-primary">Project Suggestion Page</a>
        <a href="#" class="btn btn-secondary">Github</a>
      </p>
    </div>
</section>
<nav>
  <a [routerLink]="['Projects']">Projects</a>
  <a [routerLink]="['Suggestions']">Project Suggestions</a>
</nav>
<router-outlet></router-outlet>`,
  styles: [`nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
  font-family: 'Audiowide', cursive;
}
nav a:visited, a:link {
  color: #607D8B;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.router-link-active {
  color: #039be5;
}

.hero {
  color: #E2E393;

}

.jumbotron h1 {
  color: #CDF9B2;
}`]
})
@RouteConfig([
  { path: '/my_angular2_portfolio/',       component: ProjectsComponent,        name: 'Projects', useAsDefault: true },
  { path: '/suggestions',      component: SuggestionsView,       name: 'Suggestions' },
])
export class AppComponent {

  constructor() {}

}

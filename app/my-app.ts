import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {SuggestionsView } from './components/suggestions/suggestions.component';
import { ProjectsComponent }     from './components/projects/projects.component';


@Component({
  selector: 'my-app',
  providers: [ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/my-app.html',
  style:['nav a {
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
}']
})
@RouteConfig([
  { path: '/projects',       component: ProjectsComponent,        name: 'Projects', useAsDefault: true },
  { path: '/suggestions',      component: SuggestionsView,       name: 'Suggestions' },
])
export class AppComponent {

  constructor() {}

}

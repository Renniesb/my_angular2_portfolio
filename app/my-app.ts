import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {SuggestionsView } from './components/suggestions/suggestions.component';
import { ProjectsComponent }     from './components/projects/projects.component';


@Component({
  selector: 'my-app',
  providers: [ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  moduleId: module.id,
  templateUrl: 'my-app.html',
  styleUrls:['my-app.css']
})
@RouteConfig([
  { path: '/projects',       component: ProjectsComponent,        name: 'Projects', useAsDefault: true },
  { path: '/suggestions',      component: SuggestionsView,       name: 'Suggestions' },
])
export class AppComponent {

  constructor() {}

}

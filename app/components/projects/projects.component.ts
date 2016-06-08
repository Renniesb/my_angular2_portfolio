
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { Component,  OnInit }       from '@angular/core';
import { Project }   from '../../services/project';
import { TechService } from '../../services/tech.service';
import {ProjectService} from '../../services/project.service';




@Component({
  selector: 'my-app',
  moduleId: module.id,
  host: {class: 'dashboard'},
  template: `  <p>
    <a class="btn btn-large btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      {{title}}
    </a>
  </p>
<div class="collapse" id="collapseExample">
  <div class="card card-block">
     <label class="label label-pill label-primary" *ngFor="let item of technologyList">
        <input type="checkbox"
             value="{{item.name}}"
             [checked]="item.checked"
             (change)="onInteractionEvent($event)">
      {{ item.name }}
      </label>
  </div>
</div>

    <h2>Featured Projects</h2>
  <div *ngFor="let project of matchedProjects" class="container">
    <div class="row">
      <div class="col-sm-4 col-sm-offset-1 card">
        <img src="http://placehold.it/350x150" class="card-img-top img-fluid img-rounded center-block" data-src="..." alt="Card image cap">
          <div class="card-block  text-xs-center">
          <h4 class="card-title">Project Name: {{project.name}} </h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. This is alot of text. It adds length to the paragraph. It adds bulk. I had to do it. It was very necessary for this example</p>
          <a class="btn btn-primary">See live site</a>
          </div>
          <p> {{ project.favs }} Likes <a href (click)="favUp(project)">Like</a></p>
      </div>
      <div class="col-sm-6 text-xs-center">
        <h2 >Technology used</h2>
        <p>{{project.technologies}}</p>
      </div>
    </div>
  </div>`,
  providers: [ProjectService, TechService]

})



export class ProjectsComponent implements OnInit {

  technologyList : Array<any>;
  allProjects: Project[];
  title: string = 'Filter Projects by Technology';


  constructor(private projectService: ProjectService, private techService: TechService ) {}

   ngOnInit(){
    this.getTech();
    this.getProjects();
    this.updateSelectedList();
  }

  getProjects(){
    this.allProjects = this.projectService.getProjects();
  }

  getTech(){

    this.technologyList = this.techService.getTech();
  }

  /* projects that match the selected tech */
  matchedProjects: Array<any> = []

  /* The checked items in the list */
  selectedTechnology: Array<string> = [];

  favUp(project): boolean {
          project.favUp();
          return false;
  }

  onInteractionEvent(event: Event) {
    var item = this.technologyList.find(
      (val) => val.name === event.target.value
    );

    item.checked = !item.checked;
    this.updateSelectedList();
  }

  updateSelectedList() {
    let checkedNames =
        this.technologyList.filter( (val) => val.checked === true).map(n => n.name);


    this.matchedProjects = this.allProjects.filter(project => {
        return this.containsAny(project.technologies, checkedNames)
    });


  }


  containsAny(arr1, arr2) {
    for(var i in arr1) {
        if(arr2.indexOf( arr1[i] ) > -1){
            return true;
        }
    }
    return false;
};



}
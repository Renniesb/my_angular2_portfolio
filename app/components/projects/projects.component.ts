
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { Component,  OnInit }       from '@angular/core';
import { Project }   from '../../services/project';
import { TechService } from '../../services/tech.service';
import {ProjectService} from '../../services/project.service';




@Component({
  selector: 'my-app',
  host: {class: 'dashboard'},
  templateUrl: 'app/components/projects/projects.component.html',
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
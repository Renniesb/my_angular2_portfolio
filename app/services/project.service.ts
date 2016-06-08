import { Injectable } from '@angular/core';
import { MOCKPROJECTS } from './mock-projects';

@Injectable()
export class ProjectService {
  getProjects() {
    return MOCKPROJECTS;
  }
}
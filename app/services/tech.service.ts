import { Injectable } from '@angular/core';
import { MOCKTECH } from './mock-tech';

@Injectable()
export class TechService {
  getTech() {
    return MOCKTECH;
  }
}
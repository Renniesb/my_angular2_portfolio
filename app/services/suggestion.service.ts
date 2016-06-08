import { Injectable } from '@angular/core';
import { SUGGESTIONS } from './mock-suggestions';

@Injectable()
export class SuggestionService {
  getSuggestions() {
    return SUGGESTIONS;
  }
}
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { Component, OnInit }   from '@angular/core';
import { Suggestion }   from '../../services/suggestion';
import { SuggestionService } from '../../services/suggestion.service';



@Component({
  selector: 'suggestion-posts',
  inputs: ['suggestion'],
  host: {
    class: 'row'
  },
  template: `
  <div class="container">
    <div class="row">
      <div class="col-xs-4">
        <a href (click)="voteUp()">
          <p>Upvote <span class="fa fa-chevron-up"></span></p>
        </a>
        <a href (click)="voteDown()">
            <p>Downvote <span class="fa fa-chevron-down"></span></p>
        </a>
        <p>{{ suggestion.votes }} Votes</p>
      </div>
      <div class="col-xs-8 text-xs-center">
        <h4>Project Title</h4>
        <p>{{ suggestion.title }}</p>
        <h4> Project Description</h4>
        <p>{{ suggestion.comment }}</p>
      </div>
    </div>
  </div>
  `
})
export class SuggestionsComponent {
  suggestion: Suggestion;

  voteUp(): boolean {
    this.suggestion.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.suggestion.voteDown();
    return false;
  }
}

@Component({

   directives: [SuggestionsComponent],
  template: `
    <form class="Container">
      <h3 class="">Add a Project Suggestion</h3>

      <div class="row">
        <div class="col-md-6">
          <label for="title">Suggested Project Title:</label>
          <input name="title" #newtitle>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label for="comment">Suggested Project Idea</label>
          <textarea name="comment" #newcomment style="width:100%; height=100px"></textarea>
        </div>
      </div>

      <button (click)="addSuggestion(newtitle, newcomment)"
              class="">
        Submit suggestion
      </button>
    </form>

    <div class="">
      <suggestion-posts
        *ngFor="let suggestion of sortedSuggestions()"
        [suggestion]="suggestion">
      </suggestion-posts>
    </div>
  `, providers: [SuggestionService]

})
export class SuggestionsView implements OnInit {
  suggestions: Suggestion[];

  constructor(private suggestionService: SuggestionService) { }

  getSuggestions(){
    this.suggestions = this.suggestionService.getSuggestions();
  }

  ngOnInit() {
    this.getSuggestions();
  }

  addSuggestion(title: HTMLInputElement, comment: HTMLInputElement): void {
    console.log(`Adding suggestion title: ${title.value} and comment: ${comment.value}`);
    this.suggestions.push(new Suggestion(title.value, comment.value, 0));
    title.value = '';
    comment.value = '';
  }

  sortedSuggestions(): Suggestion[] {
    return this.suggestions.sort((a: Suggestion, b: Suggestion) => b.votes - a.votes);
  }

}
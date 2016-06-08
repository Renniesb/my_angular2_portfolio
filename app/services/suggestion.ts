export class Suggestion {
  title: string;
  comment: string;
  votes: number;

  constructor(title: string, comment: string, votes?: number) {
    this.title = title;
    this.comment = comment;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}
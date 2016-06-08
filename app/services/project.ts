export class Project {
  name: string;
  technologies: Array<any>;
  favs: number;

  constructor(name: string, technologies: Array<any>, favs: number) {
    this.name = name;
    this.technologies = technologies;
    this.favs = favs || 0;
  }

  favUp(): void {
    this.favs += 1;
  }

}
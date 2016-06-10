export class Project {
  name: string;
  technologies: Array<any>;
  favs: number;
  img: string;

  constructor(name: string, technologies: Array<any>, favs: number, img: string) {
    this.name = name;
    this.technologies = technologies;
    this.favs = favs || 0;
    this.img = img;
  }

  favUp(): void {
    this.favs += 1;
  }

}
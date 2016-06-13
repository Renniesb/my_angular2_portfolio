export class Project {
  name: string;
  technologies: Array<any>;
  favs: number;
  img: string;
  description: string;
  highlights: Array<any>;
  date: string;
  link: string;


  constructor(name: string, technologies: Array<any>, favs: number,img: string,description: string, highlights: Array<any>, date: string, link: string ) {
    this.name = name;
    this.technologies = technologies;
    this.favs = favs || 0;
    this.img = img;
    this.description = description;
    this.highlights = highlights;
    this.date = date;
    this.link = link;
  }

  favUp(): void {
    this.favs += 1;
  }

}
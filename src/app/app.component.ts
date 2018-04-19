import { Component } from '@angular/core';

import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles: Array<Article>;

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }

  constructor() {
    this.articles = [
      new Article('Angular 5', 'https://angular.io', 10),
      new Article('Semantic UI', 'https://semantic-ui.com', 4),
      new Article('Code mentor', 'https://www.codementor.io', 5),
    ];
  }
}

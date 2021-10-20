import { Component, OnInit } from '@angular/core';
import { TaxService } from '@app/_services';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})


export class ArticleListComponent implements OnInit {

  articles: any[];

  constructor(private taxService: TaxService) { }

  ngOnInit() {
    this.taxService.getAll()
    .subscribe(articles => {
      console.log(articles);
      this.articles = articles;
    });
  }

}

import { Component } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent {
  constructor(private api: TcnewsapiService) {}

  topHeadlinesData:any = [];

   ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result) => {
      console.log(result);
      this.topHeadlinesData = result.articles;
     })
   }
}

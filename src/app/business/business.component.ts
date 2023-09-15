import { Component } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  constructor(private api: TcnewsapiService) {}

  businessNewsData:any = [];

  ngOnInit(): void {
   this.api.tcBusinessNews().subscribe((result) => {
     console.log(result);
     this.businessNewsData = result.articles;
    })
  }
}

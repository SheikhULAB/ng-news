import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path: '', component:TopHeadlineComponent},
  {path: 'tech', component:TechComponent},
  {path: 'business', component:BusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

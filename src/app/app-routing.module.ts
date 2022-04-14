import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutViewComponent } from './portfolio/views/about-view/about-view.component';
import { ContactViewComponent } from './portfolio/views/contact-view/contact-view.component';
import { HomeViewComponent } from './portfolio/views/home-view/home-view.component';
import { PortfolioViewComponent } from './portfolio/views/portfolio-view/portfolio-view.component';

const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: 'portfolio', component: PortfolioViewComponent },
  { path: 'contact', component: ContactViewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

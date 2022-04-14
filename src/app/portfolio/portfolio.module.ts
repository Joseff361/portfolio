import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioLayoutComponent } from './layouts/portfolio-layout/portfolio-layout.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PortfolioViewComponent } from './views/portfolio-view/portfolio-view.component';
import { ContactViewComponent } from './views/contact-view/contact-view.component';

@NgModule({
  declarations: [PortfolioLayoutComponent, HomeViewComponent, AboutViewComponent, PortfolioViewComponent, ContactViewComponent],
  imports: [CommonModule],
  exports: [PortfolioLayoutComponent],
})
export class PortfolioModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { PortfolioLayoutComponent } from './layouts/portfolio-layout/portfolio-layout.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PortfolioViewComponent } from './views/portfolio-view/portfolio-view.component';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { CardClassicComponent } from './components/card-classic/card-classic.component';

@NgModule({
  declarations: [
    PortfolioLayoutComponent,
    HomeViewComponent,
    AboutViewComponent,
    PortfolioViewComponent,
    ContactViewComponent,
    CardComponent,
    CardClassicComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [PortfolioLayoutComponent],
})
export class PortfolioModule {}

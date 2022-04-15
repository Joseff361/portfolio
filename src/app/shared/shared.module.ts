import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AppRoutingModule, MatMenuModule, MatIconModule],
  exports: [HeaderComponent],
})
export class SharedModule {}

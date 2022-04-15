import { Component, OnInit } from '@angular/core';
import { Project } from '../../../shared/interfaces/index';
import { projects } from 'src/app/shared/constants';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.scss'],
})
export class PortfolioViewComponent {
  public projects: Project[] = projects;
}

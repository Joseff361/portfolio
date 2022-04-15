import { Component } from '@angular/core';
import { Skill } from '../../../shared/interfaces/index';
import { languages, frameworks, others } from '../../../shared/constants/index';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss'],
})
export class AboutViewComponent {
  public languages: Skill[] = languages;
  public frameworks: Skill[] = frameworks;
  public others: Skill[] = others;
}

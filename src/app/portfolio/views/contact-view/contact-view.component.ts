import { Component } from '@angular/core';
import { contacts } from '../../../shared/constants/index';
import { Skill } from '../../../shared/interfaces/index';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss'],
})
export class ContactViewComponent {
  public contacts: Skill[] = contacts;
}

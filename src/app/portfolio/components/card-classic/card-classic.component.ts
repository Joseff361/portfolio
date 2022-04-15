import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-classic',
  templateUrl: './card-classic.component.html',
  styleUrls: ['./card-classic.component.scss'],
})
export class CardClassicComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() website: string = '';
  @Input() repository: string = '';
  @Input() image: string = '';
}

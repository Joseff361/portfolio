import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isDarkOn: boolean = false;

  ngOnInit(): void {
    this.isDarkOn = JSON.parse(localStorage.getItem('dark-mode') || 'false');
    if (this.isDarkOn) document.body.classList.toggle('dark-theme');
  }

  swicthMode(): void {
    this.isDarkOn = !this.isDarkOn;
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-mode', JSON.stringify(this.isDarkOn));
  }
}

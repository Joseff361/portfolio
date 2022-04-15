import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClassicComponent } from './card-classic.component';

describe('CardClassicComponent', () => {
  let component: CardClassicComponent;
  let fixture: ComponentFixture<CardClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardClassicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleArtikelenComponent } from './alle-artikelen.component';

describe('AlleArtikelenComponent', () => {
  let component: AlleArtikelenComponent;
  let fixture: ComponentFixture<AlleArtikelenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlleArtikelenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleArtikelenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

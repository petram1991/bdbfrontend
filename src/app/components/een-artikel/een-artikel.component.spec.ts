import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EenArtikelComponent } from './een-artikel.component';

describe('EenArtikelComponent', () => {
  let component: EenArtikelComponent;
  let fixture: ComponentFixture<EenArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EenArtikelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EenArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

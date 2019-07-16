import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaHeroesComponent } from './busqueda-heroes.component';

describe('BusquedaHeroesComponent', () => {
  let component: BusquedaHeroesComponent;
  let fixture: ComponentFixture<BusquedaHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedioInfoClienteComponent } from './promedio-info-cliente.component';

describe('PromedioInfoClienteComponent', () => {
  let component: PromedioInfoClienteComponent;
  let fixture: ComponentFixture<PromedioInfoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromedioInfoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromedioInfoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

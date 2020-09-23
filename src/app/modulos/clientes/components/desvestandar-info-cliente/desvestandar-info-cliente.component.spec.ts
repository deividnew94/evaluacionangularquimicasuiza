import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesvestandarInfoClienteComponent } from './desvestandar-info-cliente.component';

describe('DesvestandarInfoClienteComponent', () => {
  let component: DesvestandarInfoClienteComponent;
  let fixture: ComponentFixture<DesvestandarInfoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesvestandarInfoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesvestandarInfoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

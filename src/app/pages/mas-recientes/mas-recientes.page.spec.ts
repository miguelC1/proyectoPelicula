import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasRecientesPage } from './mas-recientes.page';

describe('MasRecientesPage', () => {
  let component: MasRecientesPage;
  let fixture: ComponentFixture<MasRecientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MasRecientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaPage } from './asistencia.page';

describe('AsistenciaPage', () => {
  let component: AsistenciaPage;
  let fixture: ComponentFixture<AsistenciaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsistenciaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería inicializar "permitir" y "permitir2" como false', () => {
    expect(component.permitir).toBeFalse();
    expect(component.permitir2).toBeFalse();
  });

  it('debería alternar el valor de "permitir" cuando se llama a "mostrar"', () => {
    component.mostrar();
    expect(component.permitir).toBeTrue();

    component.mostrar();
    expect(component.permitir).toBeFalse();
  });

  it('debería alternar el valor de "permitir2" cuando se llama a "mostrar2"', () => {
    component.mostrar2();
    expect(component.permitir2).toBeTrue();

    component.mostrar2();
    expect(component.permitir2).toBeFalse();
  });
});

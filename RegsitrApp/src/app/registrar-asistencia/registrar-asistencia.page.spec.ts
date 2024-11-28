import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarAsistenciaPage } from './registrar-asistencia.page';

describe('RegistrarAsistenciaPage', () => {
  let component: RegistrarAsistenciaPage;
  let fixture: ComponentFixture<RegistrarAsistenciaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarAsistenciaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarAsistenciaPage);
    component = fixture.componentInstance;
  });
  it ('Imagen inicializada en falso', () => {
    expect(component.mostrarImagen).toBeFalse();
  });
  it ('Mostrar imagen', () => {
    component.showImage();
    expect(component.mostrarImagen).toBeTrue();
  });

})
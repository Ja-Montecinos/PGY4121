import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioPage } from './usuario.page';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

describe('UsuarioPage', () => {
  let component: UsuarioPage;
  let fixture: ComponentFixture<UsuarioPage>;
  let router: Router;
  let alertController: AlertController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioPage],
      providers: [
        {
          provide: AlertController,
          useValue: {
            create: jasmine.createSpy().and.returnValue({
              present: jasmine.createSpy().and.returnValue(Promise.resolve()),
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    alertController = TestBed.inject(AlertController);
    fixture.detectChanges();
  });

  describe('funcionIngresar', () => {
    it('Ir a inicio si las credenciales son correctas', () => {
      const navigateSpy = spyOn(router, 'navigate');
      component.usuario = 'Usuario1';
      component.password = 'MiClav3';
      component.funcionIngresar();
      expect(navigateSpy).toHaveBeenCalledWith(['/inicio']);
    });

    it('Mostrar alerta si la contraseña es incorrecta', async () => {
      component.usuario = 'Usuario1';
      component.password = 'abcd123';
      await component.funcionIngresar();
      expect(alertController.create).toHaveBeenCalledWith(
        jasmine.objectContaining({
          header: 'Credenciales Incorrectas',
          message:
            'Las credenciales ingresadas son incorrectas, porfavor verifique su usuario y contraseñas nuevamente',
        })
      );
    });
    it('Mostrar alerta si el usuario es incorrecto', async () => {
      component.usuario = 'Usuario2';
      component.password = 'MiClav3';
      await component.funcionIngresar();
      expect(alertController.create).toHaveBeenCalledWith(
        jasmine.objectContaining({
          header: 'Credenciales Incorrectas',
          message:
            'Las credenciales ingresadas son incorrectas, porfavor verifique su usuario y contraseñas nuevamente',
        })
      );
    });
  });
  describe('funcionRestablecer', () => {
    it('Mostrar alerta cuando el usuario ingresa usuario para restablecer', async () => {
      component.usuario = 'testuser';
      await component.funcionRestablecer();
      expect(alertController.create).toHaveBeenCalledWith(
        jasmine.objectContaining({
          header: 'Restablecer Contraseña',
          message:
            'Hemos enviado un correo con los pasos a seguir para restablecer tu contraseña testuser',
        })
      );
    });

    it('Mostrar alerta si usuario esta en blanco', async () => {
      component.usuario = '';
      await component.funcionRestablecer();
      expect(alertController.create).toHaveBeenCalledWith(
        jasmine.objectContaining({
          message:
            'Hemos enviado un correo con los pasos a seguir para restablecer tu contraseña ',
        })
      );
    });
  });
});
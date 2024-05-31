import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormularioClienteComponent } from './dialog-formulario-cliente.component';

describe('DialogFormularioClienteComponent', () => {
  let component: DialogFormularioClienteComponent;
  let fixture: ComponentFixture<DialogFormularioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFormularioClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogFormularioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

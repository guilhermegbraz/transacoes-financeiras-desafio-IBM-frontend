import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormularioTransacaoComponent } from './dialog-formulario-transacao.component';

describe('DialogFormularioTransacaoComponent', () => {
  let component: DialogFormularioTransacaoComponent;
  let fixture: ComponentFixture<DialogFormularioTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFormularioTransacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogFormularioTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

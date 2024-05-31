import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacaoContaComponent } from './transacao-conta.component';

describe('TransacaoContaComponent', () => {
  let component: TransacaoContaComponent;
  let fixture: ComponentFixture<TransacaoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransacaoContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransacaoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

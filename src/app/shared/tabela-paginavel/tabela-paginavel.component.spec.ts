import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPaginavelComponent } from './tabela-paginavel.component';

describe('TabelaPaginavelComponent', () => {
  let component: TabelaPaginavelComponent;
  let fixture: ComponentFixture<TabelaPaginavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaPaginavelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaPaginavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

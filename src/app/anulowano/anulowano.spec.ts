import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Anulowano } from './anulowano';

describe('Anulowano', () => {
  let component: Anulowano;
  let fixture: ComponentFixture<Anulowano>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anulowano],
    }).compileComponents();

    fixture = TestBed.createComponent(Anulowano);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

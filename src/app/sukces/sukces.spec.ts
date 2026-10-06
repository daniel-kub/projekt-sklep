import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sukces } from './sukces';

describe('Sukces', () => {
  let component: Sukces;
  let fixture: ComponentFixture<Sukces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sukces],
    }).compileComponents();

    fixture = TestBed.createComponent(Sukces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

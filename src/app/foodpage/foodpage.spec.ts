import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Foodpage } from './foodpage';

describe('Foodpage', () => {
  let component: Foodpage;
  let fixture: ComponentFixture<Foodpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foodpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Foodpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

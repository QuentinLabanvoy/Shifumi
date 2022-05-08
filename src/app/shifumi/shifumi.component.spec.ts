import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShifumiComponent } from './shifumi.component';

describe('ShifumiComponent', () => {
  let component: ShifumiComponent;
  let fixture: ComponentFixture<ShifumiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShifumiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShifumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

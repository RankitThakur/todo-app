import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododemoComponent } from './tododemo.component';

describe('TododemoComponent', () => {
  let component: TododemoComponent;
  let fixture: ComponentFixture<TododemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TododemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

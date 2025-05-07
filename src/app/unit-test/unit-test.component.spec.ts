import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestComponent } from './unit-test.component';

describe('UnitTestComponent', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with 0', () => {
    expect(component.count).toBe(0);
  })

  it('should increment count when increment is called', () => {
    component.increment();
    expect(component.count).toBe(1);
  })

  it('should decrement count when decrement is called', () => {
    component.decrement();
    expect(component.count).toBe(0)
  })

  it('should update the template when count is changed', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h5')?.textContent).toContain(0);
    component.increment();
    fixture.detectChanges();
    expect(compiled.querySelector('h5')?.textContent).toContain(1);
  })

  it('should not count decrement count below 0', () => {
    component.decrement();
    expect(component.count).toBe(0);
    component.increment();
    component.decrement();
    component.decrement();
    expect(component.count).toBe(0);
  })
});

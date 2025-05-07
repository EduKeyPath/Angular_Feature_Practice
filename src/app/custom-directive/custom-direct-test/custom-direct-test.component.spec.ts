import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectTestComponent } from './custom-direct-test.component';

describe('CustomDirectTestComponent', () => {
  let component: CustomDirectTestComponent;
  let fixture: ComponentFixture<CustomDirectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show elemeent default value true', () => {
    expect(component.showElement).toBe(true);
  })

  it('should onclick method value should be false', () => {
    expect(component.showElement).toBe(true);
    component.toggleCustomNgIf();
    expect(component.showElement).toBe(false);
  })

  it('should UI view hide when onclick method clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.customdiv')?.className).toContain(DataView);
    component.toggleCustomNgIf();
    fixture.detectChanges();
    expect(compiled.querySelector('.customdiv')?.className).toContain(null);
  })

  

  
});

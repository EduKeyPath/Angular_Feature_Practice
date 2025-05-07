import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackByComponent } from './track-by.component';

describe('TrackByComponent', () => {
  let component: TrackByComponent;
  let fixture: ComponentFixture<TrackByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start default data', () => {
    expect(component.studentList.length).toBe(6);
    expect(component.studentList[0]).toEqual({id: 1, name : 'banti', marks: 64})
  })

//   it('should render all items in the student list', () => {
//     const compiled = fixture.nativeElement as HTMLElement;
//     const itemInDom = compiled.querySelectorAll('td');
//     expect(itemInDom.length).toBe(6);
//     expect(itemInDom[0].textContent).toContain('banti')
//   })

  it('should a new item to array', () => {
    component.addData()
    expect(component.studentList.length).toBe(7);
    expect(component.studentList[component.studentList.length - 1]).toEqual({
        id: component.studentList.length,
        name: `New Data ${component.studentList.length}`,
        marks: component.studentList.length - 1
    })
  })

  it('should remove student when remove method call', () => {
    component.removeStudent(0);
    expect(component.studentList.length).toBe(5);
    expect(component.studentList[0]).toEqual({id: 2, name : 'Hello', marks: 82})
  })

  it('should editing id null on default', () => {
    expect(component.editingId).toBe(null)
  })

  it('should on edit input text filed open for specific id', () => {
    expect(component.editingId).toBe(null);
    component.editData(0);
    expect(component.editingId).toBe(0);
  })

  it('should edit null while cancel button press', () => {
    expect(component.editingId).toBe(null);
    component.editData(0);
    expect(component.editingId).toBe(0);
    component.cancelEdit();
    expect(component.editingId).toBe(null);
  })

  it('should edit null while update button press', () => {
    expect(component.editingId).toBe(null);
    component.editData(0);
    expect(component.editingId).toBe(0);

    component.cancelEdit();
    expect(component.editingId).toBe(null);
  })

  
});

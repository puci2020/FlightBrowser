import {FormControl} from '@angular/forms';
import {FlightsComponent} from './flights.component';
import {FlatpickrModule} from 'angularx-flatpickr';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('FlightsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FlightsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render first select element', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="startPlace"]');
    expect(select).toBeTruthy();
  });

  it('should render second select element', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="endPlace"]');
    expect(select).toBeTruthy();
  });

  it('should render first input element', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[name="date1"]');
    expect(input).toBeTruthy();
  });
  it('should render second input element', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[name="date2"]');
    expect(input).toBeTruthy();
  });

  it('should test form 1 select', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const form1 = compiled.querySelector('form[name="form1"]');
    const select = compiled.querySelector('select[id="startPlace"]');

    const select1 = select.options[0].text;
    expect(select1).toContain('Punkt startowy');
  });

  it('should test form 2 select', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="endPlace"]');
    const select2 = select.options[0].text;
    expect(select2).toContain('Punkt końcowy');
  });
  it('should test form 1 input', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[name="date1"]');
    const input1 = input.placeholder;
    expect(input1).toContain('YYYY-MM-DD, HH-MM');
  });
  it('should test form 1 input', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[name="date2"]');
    const input2 = input.placeholder;
    expect(input2).toContain('YYYY-MM-DD, HH-MM');
  });

  it('should test form select options', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="startPlace"]');
    select.value = select.options[1];
    fixture.detectChanges();
    expect(select.value).toEqual('Warszawa Okęcie');

    console.log(select.value);
  });
// fit('should test form select options', () => {
//   const fixture = TestBed.createComponent(FlightsComponent);
//   const compiled = fixture.debugElement.nativeElement;
//   const select = compiled.querySelector('select[id="startPlace"]')
//   select.value = select
//   // select.dispatchEvent(new Event('change'))
//   fixture.detectChanges()
//   expect(select.value).toEqual("Lublin Świdnik")

//   console.log(select.value);
//   })
});


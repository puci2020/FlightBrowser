import { ReservationsComponent } from './reservations.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReservationsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ReservationsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

   it('should render first name element', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[id="firstName"]')
    expect(input).toBeTruthy();
  });
  it('should render last name element', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[id="lastName"]')
    expect(input).toBeTruthy();
  });

  it('should render number element', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[id="number"]')
    expect(input).toBeTruthy();
  });
  it('should render flight class element', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="flightClass"]')
    expect(select).toBeTruthy();
  });
   it('should render first select element', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="startPlace"]')
    expect(select).toBeTruthy();
  });
  it('should render second select element', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="endPlace"]')
    expect(select).toBeTruthy();
  });
  
  it('should render first input element', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[name="date1"]')
    expect(input).toBeTruthy();
  });
  it('should render second input element', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[name="date2"]')
    expect(input).toBeTruthy();
  });
  it('should test form 1 input', () => {
        const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[id="lastName"]')
    expect(input.placeholder).toContain("Nazwisko")
    console.log(input);
  })
  it('should test form 2 input', () => {
        const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[id="firstName"]')
    expect(input.placeholder).toContain("Imię")
  })
  it('should test form 3 input', () => {
        const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[id="number"]')
    expect(input.placeholder).toContain("Liczba osób")
  })
  it('should test form select', () => {
        const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="flightClass"]')
    const select1 = select.options[0].text
    expect(select1).toContain("Klasa")
  })
  it('should test form 1 select', () => {
        const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="startPlace"]')
        
    const select1 = select.options[0].text
    expect(select1).toContain("Punkt startowy")
  })

  it('should test form 2 select', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const select = compiled.querySelector('select[id="endPlace"]')
    const select2 = select.options[0].text
    expect(select2).toContain("Punkt końcowy")
  })
 it('should test form 1 input', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[name="date1"]')
    const input1 = input.placeholder
    expect(input1).toContain("YYYY-MM-DD, HH-MM")    
});
it('should test form 1 input', () => {
    const fixture = TestBed.createComponent(ReservationsComponent);
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[name="date2"]')
    const input2 = input.placeholder
    expect(input2).toContain("YYYY-MM-DD, HH-MM")    
});

});

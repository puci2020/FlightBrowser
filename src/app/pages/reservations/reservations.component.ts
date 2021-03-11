import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.sass'],
})
export class ReservationsComponent implements OnInit {
  enable: any = [
    {
      from: '2010-04-01',
      to: '3025-05-01',
    },
  ];

  startPlace = new FormControl('');
  endPlace = new FormControl('');
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  firstName = new FormControl('');
  lastName = new FormControl('');
  number = new FormControl('');
  flightClass = new FormControl('');

  form = new FormGroup({
    startPlace: this.startPlace,
    endPlace: this.endPlace,
    startDate: this.startDate,
    endDate: this.endDate,
    firstName: this.firstName,
    lastName: this.lastName,
    number: this.number,
    flightClass: this.flightClass,
  });

  flights: Flight[];
  flightStart: string[] = [];
  flightEnd: string[] = [];

  filterFlights: Flight[];
  activeFlight: Flight[];
  filter = false;
  dateError = false;
  cart: string;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService
  ) {}

  public ID: string;

  ngOnInit(): void {
    this.ID = this.route.snapshot.paramMap.get('id');
    this.flights = this.flightService.flights;
    this.filterFlights = this.flights;
    this.getFLightStartEnd(this.flights);

    if (this.ID !== null) {
      this.route.params.subscribe((param) => {
        this.setForm(param.id);
      });
      this.setForm(this.ID);
    }

    if (localStorage.getItem('cart')) {
      this.cart = localStorage.getItem('cart');
    } else {
      localStorage.setItem('cart', '0');
    }
  }

  setForm(ID: string): void {
    const id: number = +ID;
    this.activeFlight = this.flights.filter((x) => x.id === id);
    const newFlight = this.activeFlight[0];
    this.form.setValue({
      startPlace: newFlight.startPlace,
      endPlace: newFlight.endPlace,
      startDate: newFlight.startDate,
      endDate: newFlight.endDate,
      firstName: '',
      lastName: '',
      number: null,
      flightClass: '',
    });
  }

  validateDate(): boolean {
    if (
      this.form.value.startDate !== null &&
      this.form.value.endDate !== null
    ) {
      if (
        this.form.value.startDate.getTime() > this.form.value.endDate.getTime()
      ) {
        return (this.dateError = true);
      } else {
        return (this.dateError = false);
      }
    }
  }

  addToCart(): void{
    if (localStorage.getItem('cart')) {
      this.cart = localStorage.getItem('cart');
    }
    let tmp: number = +this.cart;
    tmp++;
    localStorage.setItem('cart', tmp.toString());
  }

  submitForm(): Flight[] {
    this.filterFlights = this.flights;
    this.filterFlights = this.filterFlights.filter(
      (x) =>
        x.startPlace === this.form.value.startPlace &&
        x.endPlace === this.form.value.endPlace &&
        x.startDate.getTime() >= this.form.value.startDate.getTime() &&
        x.endDate.getTime() <= this.form.value.endDate.getTime()
    );
    this.filter = true;
    return this.filterFlights;
  }

  clearFilters(): Flight[] {
    this.filter = false;
    this.form.reset();
    return (this.filterFlights = this.flights);
  }

  getFLightStartEnd(array: Flight[]): void {
    array.forEach((x) => {
      if (!this.flightStart.includes(x.startPlace)) {
        this.flightStart.push(x.startPlace);
      }
      if (!this.flightEnd.includes(x.endPlace)) {
        this.flightEnd.push(x.endPlace);
      }
    });
  }

  getMonth(month: number): string {
    month += 1;
    if (month < 10) {
      return '0' + month;
    } else {
      return month.toString();
    }
  }
  getDay(day: number): string {
    if (day < 10) {
      return '0' + day;
    } else {
      return day.toString();
    }
  }
  getHour(hour: number): string {
    if (hour < 10) {
      return '0' + hour;
    } else {
      return hour.toString();
    }
  }
  getMinute(minute: number): string {
    if (minute < 10) {
      return '0' + minute;
    } else {
      return minute.toString();
    }
  }
}

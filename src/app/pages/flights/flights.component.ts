import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.sass'],
})
export class FlightsComponent implements OnInit {
  enable: any = [
    {
      from: '2010-04-01',
      to: '3025-05-01',
    },
  ];

  date1 = Date.now();

  startPlace = new FormControl('');
  endPlace = new FormControl('');
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  form = new FormGroup({
    startPlace: this.startPlace,
    endPlace: this.endPlace,
    startDate: this.startDate,
    endDate: this.endDate,
  });

  flights: Flight[];
  flightStart: string[] = [];
  flightEnd: string[] = [];

  filterFlights: Flight[];
  filter = false;
  dateError = false;

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.flights;
    this.filterFlights = this.flights;
    this.getFLightStartEnd(this.flights);
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
    this.form.reset();
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

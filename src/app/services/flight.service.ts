import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights: Flight[] = [
    {
      id: 1,
      startPlace: 'Warszawa Okęcie',
      endPlace: 'Lublin Świdnik',
      shortStart: 'WAW',
      shortEnd: 'LUB',
      startDate: new Date('Mon Mar 01 2021 13:16:00 GMT+0100'),
      endDate: new Date('Mon Mar 01 2021 20:16:00 GMT+0100'),
    },
    {
      id: 2,
      startPlace: 'Warszawa Okęcie',
      endPlace: 'Hamburg',
      shortStart: 'WAW',
      shortEnd: 'HAM',
      startDate: new Date('Mon Apr 11 2021 13:16:00 GMT+0100'),
      endDate: new Date('Mon Apr 11 2021 16:16:00 GMT+0100'),
    },
    {
      id: 3,
      startPlace: 'Lublin Świdnik',
      endPlace: 'Oslo',
      shortStart: 'LUB',
      shortEnd: 'OSL',
      startDate: new Date('Mon Jul 01 2021 13:16:00 GMT+0100'),
      endDate: new Date('Mon Jul 02 2021 13:16:00 GMT+0100'),
    },
    {
      id: 4,
      startPlace: 'Lublin Świdnik',
      endPlace: 'Warszawa Okęcie',
      shortStart: 'LUB',
      shortEnd: 'WAW',
      startDate: new Date('Mon Mar 01 2021 13:16:00 GMT+0100'),
      endDate: new Date('Mon Mar 02 2021 13:16:00 GMT+0100'),
    },
    {
      id: 5,
      startPlace: 'Hamburg',
      endPlace: 'Warszawa Okęcie',
      shortStart: 'HAM',
      shortEnd: 'WAW',
      startDate: new Date('Mon Mar 01 2021 13:16:00 GMT+0100'),
      endDate: new Date('Mon Mar 02 2021 13:16:00 GMT+0100'),
    },
    {
      id: 6,
      startPlace: 'Hamburg',
      endPlace: 'Oslo',
      shortStart: 'HAM',
      shortEnd: 'OSL',
      startDate: new Date('Mon Mar 01 2021 13:16:00 GMT+0100'),
      endDate: new Date('Mon Mar 02 2021 13:16:00 GMT+0100'),
    },
  ];

  constructor() { }

}

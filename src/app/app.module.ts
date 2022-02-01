import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IconsModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';



import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
// import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FlightsComponent,
    ReservationsComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    MDBBootstrapModule.forRoot(),
    FlatpickrModule.forRoot(),
    IconsModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    // CalendarModule,
    FormsModule,
    FlatpickrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

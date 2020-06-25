import React from 'react';
import { StyledBookingLink } from './Styles';
import {Journey} from './BookingLink.test';
import {Flight as FlightInterface} from 'Interfaces/Flight'; 
require('dotenv').config();


interface Props {
  inbound: Journey;
  outbound: Journey;
  flight: FlightInterface;
  city?: string;
  favCity?: string;
}

function BookingLink ({inbound, outbound, flight, city, favCity}: Props): JSX.Element {
  
  function bookingParams () {
    const bookingDetails = [
      trim(city ? city : outbound.origin.CityName!, 0, 4),
      trim(favCity ? favCity : inbound.origin.CityName!, 0, 4),
      trim(flight.OutboundLeg.DepartureDate, 0, 10),
      trim(flight.InboundLeg.DepartureDate, 0, 10)
    ];
    return [...bookingDetails].join('/');
  }

  function trim (string: String, start: number, end: number) {
    return string.slice(start, end);
  }

  return (
    <StyledBookingLink
      href={ process.env.REACT_APP_BOOKING_URL + bookingParams() }
      rel="noopener noreferrer"
      aria-label="Book Flights"
      title="Book Flights"
      target="_blank"
    >
      Book Your Flights
    </StyledBookingLink>
  )
}

export default BookingLink;